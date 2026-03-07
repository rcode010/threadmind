import Graph from "./Graph";

const GraphPanel = () => {
  const nodes = [
    {
      id: "1",
      label: "Launch product",
      type: "decision",
      risk: "high",
      confidence: 70,
    },
    {
      id: "2",
      label: "Bootstrap funding",
      type: "alternative",
      risk: "low",
      confidence: 85,
    },
    {
      id: "3",
      label: "Seek VC",
      type: "alternative",
      risk: "medium",
      confidence: 55,
    },
    {
      id: "4",
      label: "Market is ready",
      type: "idea",
      risk: "medium",
      confidence: 60,
    },
    {
      id: "5",
      label: "Team not ready",
      type: "conflict",
      risk: "high",
      confidence: 80,
    },
  ];

  const edges = [
    { id: "e1", source: "1", target: "2", type: "alternative" },
    { id: "e2", source: "1", target: "3", type: "alternative" },
    { id: "e3", source: "4", target: "1", type: "supports" },
    { id: "e4", source: "5", target: "1", type: "contradicts" },
  ];

  return (
    <div
      style={{
        flex: 1,
        height: "100vh",
        position: "relative",
        background: "var(--bg-base)",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, #21262d 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(88,196,220,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      {/* Toolbar */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 4,
          alignItems: "center",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
          borderRadius: 10,
          padding: "4px",
          fontFamily: "'Outfit', sans-serif",
          zIndex: 10,
        }}
      >
        {["Select", "Add Node", "Connect"].map((tool, i) => (
          <button
            key={tool}
            style={{
              padding: "5px 12px",
              borderRadius: 7,
              border: "none",
              background: i === 0 ? "rgba(88,196,220,0.15)" : "transparent",
              color: i === 0 ? "var(--accent)" : "var(--text-secondary)",
              fontSize: 12,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {tool}
          </button>
        ))}
      </div>
      {/* Empty state */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          pointerEvents: "none",
        }}
      >
        {!nodes && (
          <div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                border: "1px dashed rgba(88,196,220,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  opacity: 0.5,
                }}
              />
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              Select a thread to begin
            </div>
          </div>
        )}
      </div>
      <div style={{ position: "absolute", inset: 0 }}>
        <Graph nodes={nodes} edges={edges} />
      </div>{" "}
    </div>
  );
};

export default GraphPanel;
