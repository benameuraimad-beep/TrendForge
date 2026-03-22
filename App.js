import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#0b0f19', minHeight: '100vh', color: 'white', padding: '24px', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#4ade80', padding: '8px', borderRadius: '6px' }}>⚡</div>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>TrendForge</h1>
        </div>
        <div style={{ flex: 1, margin: '0 40px', maxWidth: '500px' }}>
          <input 
            type="text" 
            placeholder="Search for opportunities..." 
            style={{ width: '100%', padding: '10px 20px', borderRadius: '20px', border: '1px solid #374151', backgroundColor: '#151a23', color: 'white' }}
          />
        </div>
        <button style={{ backgroundColor: '#4ade80', color: 'black', padding: '10px 25px', borderRadius: '20px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          Start Analysis
        </button>
      </header>

      {/* Hero Section */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>Project Dashboard</h2>
        <p style={{ color: '#9ca3af' }}>Autonomous Startup Analysis Complete</p>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <div style={{ backgroundColor: '#11151e', padding: '20px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>TARGET MARKET</p>
          <p style={{ fontWeight: 'bold' }}>Validated Opportunity</p>
        </div>
        <div style={{ backgroundColor: '#11151e', padding: '20px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>COMPLEXITY</p>
          <p style={{ fontWeight: 'bold' }}>MVP Ready</p>
        </div>
        <div style={{ backgroundColor: '#11151e', padding: '20px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '5px' }}>STATUS</p>
          <p style={{ fontWeight: 'bold', color: '#4ade80' }}>● Ready to Build</p>
        </div>
      </div>

      {/* Pipeline Section */}
      <h3 style={{ fontSize: '14px', color: '#9ca3af', letterSpacing: '2px', marginBottom: '20px' }}>AGENT PIPELINE</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {['Trend Scout', 'Problem Miner', 'Competitor Analyst'].map((agent) => (
          <div key={agent} style={{ backgroundColor: '#151a23', padding: '20px', borderRadius: '15px', border: '1px solid #374151', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '10px', borderRadius: '10px' }}>🤖</div>
              <div>
                <p style={{ fontWeight: 'bold' }}>{agent}</p>
                <p style={{ fontSize: '12px', color: '#9ca3af' }}>Completed</p>
              </div>
            </div>
            <div style={{ color: '#4ade80' }}>✔</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
