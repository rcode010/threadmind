import { useRef, useEffect } from "react";
import * as d3 from "d3";

const nodeColors = {
  decision: "#f0883e",
  alternative: "#bc8cff",
  idea: "#58c4dc",
  conflict: "#ff7b72",
  note: "#56d364",
};

const edgeColors = {
  alternative: "#bc8cff",
  supports: "#56d364",
  contradicts: "#ff7b72",
  relates: "#58c4dc",
};

const Graph = ({ nodes, edges }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!nodes || !edges) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    const g = svg.append("g");

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(edges)
          .id((d) => d.id)
          .distance(150),
      )
      .force("charge", d3.forceManyBody().strength(-500))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide(50));

    // edges
    const link = g
      .append("g")
      .selectAll("line")
      .data(edges)
      .join("line")
      .attr("stroke", (d) => edgeColors[d.type] || "#21262d")
      .attr("stroke-width", 1.5)
      .attr("opacity", 0.6);

    // nodes
    const node = g
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 20)
      .attr("fill", "#0d1117")
      .attr("stroke", (d) => nodeColors[d.type] || "#58c4dc")
      .attr("stroke-width", 2)
      .attr("cursor", "pointer");

    // labels
    const label = g
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text((d) => d.label)
      .attr("fill", "#8b949e")
      .attr("font-size", 11)
      .attr("text-anchor", "middle")
      .attr("pointer-events", "none");

    // tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      label.attr("x", (d) => d.x).attr("y", (d) => d.y + 35);
    });

    // drag
    const drag = d3
      .drag()
      .on("start", (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on("drag", (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on("end", (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    // zoom — fixed for SVG
    const zoom = d3
      .zoom()
      .scaleExtent([0.2, 3])
      .filter((event) => {
        if (event.type === "wheel") {
          event.preventDefault(); // ← stops browser zoom/scroll
          return true;
        }
        return event.target.tagName !== "circle";
      })
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);
  }, [nodes, edges]);

  return (
    <svg
      ref={svgRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
};

export default Graph;
