import { useState } from 'react'

const files = [
  { id: '1', name: 'Startup idea', nodeCount: 8, updatedAt: '2h ago' },
  { id: '2', name: 'Career decision', nodeCount: 5, updatedAt: '1d ago' },
  { id: '3', name: 'Product roadmap', nodeCount: 12, updatedAt: '3d ago' },
]

const SideBar = () => {
  const [selected, setSelected] = useState('1')
  const [hover, setHover] = useState(null)

  return (
    <div style={{
      width: '260px', minWidth: '260px', height: '100vh',
      background: 'var(--bg-surface)',
      borderRight: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      fontFamily: "'Outfit', sans-serif",
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, var(--accent) 0%, #bc8cff 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700, color: '#070a0f'
          }}>T</div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>ThreadMind</div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>reasoning graph</div>
          </div>
        </div>
      </div>

      {/* New Thread Button */}
      <div style={{ padding: '12px 12px 8px' }}>
        <button style={{
          width: '100%', padding: '8px 12px',
          background: 'var(--accent-glow)',
          border: '1px dashed rgba(88,196,220,0.3)',
          borderRadius: 8, color: 'var(--accent)',
          fontSize: 12, fontWeight: 500, fontFamily: "'Outfit', sans-serif",
          cursor: 'pointer', display: 'flex', alignItems: 'center',
          gap: 6, transition: 'all 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(88,196,220,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-glow)'}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>+</span> New Thread
        </button>
      </div>

      {/* Files List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 12px' }}>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 4px 6px' }}>
          Threads
        </div>
        {files.map(file => (
          <div key={file.id}
            onClick={() => setSelected(file.id)}
            onMouseEnter={() => setHover(file.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              padding: '10px 12px', borderRadius: 8, marginBottom: 2,
              cursor: 'pointer', transition: 'all 0.15s',
              background: selected === file.id ? 'rgba(88,196,220,0.08)' : hover === file.id ? 'var(--bg-elevated)' : 'transparent',
              border: selected === file.id ? '1px solid rgba(88,196,220,0.2)' : '1px solid transparent',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: selected === file.id ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {file.name}
              </div>
              <div style={{
                fontSize: 10, color: selected === file.id ? 'var(--accent)' : 'var(--text-muted)',
                fontFamily: "'JetBrains Mono', monospace",
                background: selected === file.id ? 'var(--accent-glow)' : 'transparent',
                padding: '1px 5px', borderRadius: 4,
              }}>{file.nodeCount}</div>
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 2 }}>{file.updatedAt}</div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div  style={{ padding: '12px 16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#56d364' }} />
        <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>connected</span>
      </div>
    </div>
  )
}

export default SideBar