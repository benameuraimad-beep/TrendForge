import React from 'react';

// هذا هو المكون الرئيسي للواجهة الداكنة لـ TrendForge
function App() {
  const primaryColor = '#4ade80'; // الأخضر الفسفوري
  const bgColor = '#0b0f19';      // الخلفية الداكنة جدًا
  const cardBg = '#151a23';       // خلفية البطاقات

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      minHeight: '100vh', 
      color: 'white', 
      padding: '24px', 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' 
    }}>
      
      {/* Header - الشريط العلوي */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '40px',
        borderBottom: '1px solid #1e293b',
        paddingBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            backgroundColor: primaryColor, 
            color: 'black',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '20px'
          }}>⚡</div>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>TrendForge</h1>
        </div>
        
        <div style={{ flex: 1, margin: '0 50px', maxWidth: '600px' }}>
          <input 
            type="text" 
            placeholder="Search AI Opportunities..." 
            style={{ 
              width: '100%', 
              padding: '12px 20px', 
              borderRadius: '30px', 
              border: '1px solid #374151', 
              backgroundColor: cardBg, 
              color: 'white',
              outline: 'none'
            }}
          />
        </div>

        <button style={{ 
          backgroundColor: primaryColor, 
          color: 'black', 
          padding: '12px 25px', 
          borderRadius: '30px', 
          fontWeight: 'bold', 
          border: 'none', 
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(74, 222, 128, 0.3)'
        }}>
          Start Analysis
        </button>
      </header>

      {/* Hero Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '38px', fontWeight: '800', marginBottom: '10px' }}>Project Dashboard</h2>
        <p style={{ color: '#9ca3af', fontSize: '18px' }}>Autonomous Startup Analysis Complete</p>
      </div>

      {/* Stats Cards - بطاقات الإحصائيات */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '20px', 
        marginBottom: '50px' 
      }}>
        {[
          { label: 'TARGET MARKET', value: 'Validated Opportunity' },
          { label: 'COMPLEXITY', value: 'MVP Ready' },
          { label: 'STATUS', value: '● Ready to Build', color: primaryColor }
        ].map((stat, i) => (
          <div key={i} style={{ 
            backgroundColor: '#111827', 
            padding: '25px', 
            borderRadius: '16px', 
            border: '1px solid #1e293b' 
          }}>
            <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px', letterSpacing: '1px' }}>{stat.label}</p>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: stat.color || 'white' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Agent Pipeline - تسلسل الوكلاء */}
      <h3 style={{ fontSize: '14px', color: '#6b7280', letterSpacing: '2px', marginBottom: '25px' }}>AGENT PIPELINE</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {[
          { name: 'Trend Scout', status: 'Completed', icon: '🔍' },
          { name: 'Problem Miner', status: 'Completed', icon: '💎' },
          { name: 'Competitor Analyst', status: 'Completed', icon: '📊' },
          { name: 'Strategy Architect', status: 'Finalizing', icon: '🏗️' }
        ].map((agent, i) => (
          <div key={i} style={{ 
            backgroundColor: cardBg, 
            padding: '20px', 
            borderRadius: '16px', 
            border: '1px solid #1e293b', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                backgroundColor: '#1e293b', 
                padding: '12px', 
                borderRadius: '12px', 
                fontSize: '20px' 
              }}>{agent.icon}</div>
              <div>
                <p style={{ fontWeight: 'bold', fontSize: '18px', margin: 0 }}>{agent.name}</p>
                <p style={{ fontSize: '14px', color: '#9ca3af', margin: 0 }}>{agent.status}</p>
              </div>
            </div>
            <div style={{ color: primaryColor, fontSize: '20px' }}>✔</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
