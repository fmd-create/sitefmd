"use client";

import { useEffect, useRef } from "react";

export function ConnectingLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const sections = document.querySelectorAll("section");
    const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];

    function updateLines() {
      if (sections.length < 2) return;

      const newLines: { x1: number; y1: number; x2: number; y2: number }[] = [];

      for (let i = 0; i < sections.length - 1; i++) {
        const rect1 = sections[i].getBoundingClientRect();
        const rect2 = sections[i + 1].getBoundingClientRect();

        if (rect1.bottom > 0 && rect2.top < window.innerHeight) {
          newLines.push({
            x1: window.innerWidth / 2,
            y1: rect1.bottom - window.scrollY,
            x2: window.innerWidth / 2,
            y2: rect2.top - window.scrollY,
          });
        }
      }

      const s = svg!;
      s.setAttribute("viewBox", `0 0 ${window.innerWidth} ${document.documentElement.scrollHeight}`);

      while (s.childNodes.length > newLines.length) {
        s.removeChild(s.lastChild!);
      }
      while (s.childNodes.length < newLines.length) {
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        s.appendChild(line);
      }

      newLines.forEach((line, i) => {
        const el = s.childNodes[i] as SVGLineElement;
        el.setAttribute("x1", String(line.x1));
        el.setAttribute("y1", String(line.y1));
        el.setAttribute("x2", String(line.x2));
        el.setAttribute("y2", String(line.y2));
        el.setAttribute("stroke", "rgba(10, 92, 255, 0.08)");
        el.setAttribute("stroke-width", "1");
        el.setAttribute("stroke-dasharray", "4 4");
      });
    }

    updateLines();
    window.addEventListener("scroll", updateLines);
    window.addEventListener("resize", updateLines);

    return () => {
      window.removeEventListener("scroll", updateLines);
      window.removeEventListener("resize", updateLines);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100vh", position: "fixed", top: 0, left: 0 }}
    />
  );
}
