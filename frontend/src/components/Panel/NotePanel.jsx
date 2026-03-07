const NotePanel = () => {
  return (
    <div style={{
      width: '300px', minWidth: '300px', height: '100vh',
      background: 'var(--bg-surface)',
      borderLeft: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Outfit', sans-serif",
    }}>
      {/* Header */}
      <div style={{ padding: '20px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
          Node Detail
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
          Select a node to inspect
        </div>
      </div>

      {/* Empty state */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: 24,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          border: '1px dashed var(--border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--text-muted)' }} />
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
          Click any node in the graph to view and edit its details
        </div>
      </div>

      {/* Graph stats */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
          Graph Overview
        </div>
        {[['Nodes', '—'], ['Edges', '—'], ['Conflicts', '—']].map(([label, val]) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span>
            <span style={{ fontSize: 12, color: 'var(--text-primary)', fontFamily: "'JetBrains Mono', monospace" }}>{val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotePanel