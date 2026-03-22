import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#0b0f19', minHeight: '100vh', color: 'white', padding: '24px', fontFamily: 'sans-serif' }}>
      
      {/* Header - الجزء العلوي */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#4ade80', padding: '8px', borderRadius: '6px', fontSize: '20px' }}>⚡</div>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px' }}>TrendForge</h1>
        </div>
        
        {/* Search Bar - خانة البحث */}
        <div style={{ flex: 1, margin: '0 40px', maxWidth: '600px' }}>
          <input 
            type="text" 
            placeholder="Search for opportunities (e.g., AI in Geology)..." 
            style={{ 
              width: '100%', 
              padding: '12px 25px', 
              borderRadius: '25px', 
              border: '1px solid #374151', 
              backgroundColor: '#151a23', 
              color: 'white',
              outline: 'none'
            }}
          />
        </div>

        <button style={{ backgroundColor: '#4ade80', color: 'black', padding: '12px 30px', borderRadius: '25px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
          Start Analysis
        </button>
      </header>

      {/* Hero Section - عنوان الصفحة */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '8px' }}>Project Dashboard</h2>
        <p style={{ color: '#9ca3af', fontSize: '18px' }}>Autonomous Startup Analysis Complete</p>
      </div>

      {/* Stats Cards - بطاقات الإحصائيات */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '50px' }}>
        <div style={{ backgroundColor: '#11151e', padding: '25px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '10px', letterSpacing: '1px' }}>TARGET MARKET</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Validated Opportunity</p>
        </div>
        <div style={{ backgroundColor: '#11151e', padding: '25px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '10px', letterSpacing: '1px' }}>COMPLEXITY</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>MVP Ready</p>
        </div>
        <div style={{ backgroundColor: '#11151e', padding: '25px', borderRadius: '15px', border: '1px solid #374151' }}>
          <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '10px', letterSpacing: '1px' }}>STATUS</p>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#4ade80' }}>● Ready to Build</p>
        </div>
      </div>

      {/* Pipeline Section - تسلسل الوكلاء */}
      <h3 style={{ fontSize: '14px', color: '#9ca3af', letterSpacing: '2px', marginBottom: '25px' }}>AGENT PIPELINE</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {[
          { name: 'Trend Scout', desc: 'Market trends and niche identification' },
          { name: 'Problem Miner', desc: 'Pain point extraction and validation' },
          { name: 'Competitor Analyst', desc: 'Competitive landscape mapping' },
          { name: 'Strategy Architect', desc: 'Business model and monetization' }
        ].map((agent) => (
          <div key={agent.name} style={{ 
            backgroundColor: '#151a23', 
            padding: '25px', 
            borderRadius: '15px', 
            border: '1px solid #374151', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ backgroundColor: '#1e293b', padding: '12px', borderRadius: '12px', fontSize: '20px' }}>🤖</div>
              <div>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px' }}>{agent.name}</p>
                <p style={{ fontSize: '14px', color: '#9ca3af' }}>{agent.desc}</p>
              </div>
            </div>
            <div style={{ color: '#4ade80', fontWeight: 'bold', fontSize: '20px' }}>✔</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
