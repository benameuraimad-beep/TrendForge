import React, { useState } from 'react';

function App() {
  const [isanalyzing, setIsAnalyzing] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);

  const agents = [
    { name: 'Trend Scout', desc: 'Market trends and niche identification' },
    { name: 'Problem Miner', desc: 'Pain point extraction and validation' },
    { name: 'Competitor Analyst', desc: 'Competitive landscape mapping' },
    { name: 'Opportunity Evaluator', desc: 'Market potential and risk assessment' },
    { name: 'Startup Architect', desc: 'Business model and monetization strategy' },
    { name: 'Market Reality', desc: 'Feasibility and real-world barriers' },
    { name: 'MVP Builder', desc: 'Feature prioritization and core logic' },
    { name: 'Startup Builder', desc: 'Scalability and growth engineering' },
    { name: 'Report Generator', desc: 'Comprehensive strategic output' }
  ];

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setActiveStep(0);
    
    // محاكاة عمل الوكلاء واحد تلو الآخر
    agents.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
        if (index === agents.length - 1) {
          setTimeout(() => setActiveStep(agents.length), 1500);
        }
      }, (index + 1) * 2000); // كل وكيل يأخذ ثانيتين
    });
  };

  return (
    <div style={{ backgroundColor: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: '#22c55e', padding: '10px', borderRadius: '8px', boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' }}>⚡</div>
          <h1 style={{ fontSize: '24px', margin: 0, letterSpacing: '1px' }}>TrendForge</h1>
        </div>
        <button 
          onClick={startAnalysis}
          disabled={isanalyzing}
          style={{ 
            backgroundColor: isanalyzing ? '#1a472a' : '#22c55e', 
            color: isanalyzing ? '#888' : 'black', 
            border: 'none', 
            padding: '12px 25px', 
            borderRadius: '25px', 
            fontWeight: 'bold', 
            cursor: isanalyzing ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s'
          }}>
          {isanalyzing ? 'Analyzing...' : 'Start Analysis'}
        </button>
      </div>

      <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Project Dashboard</h2>
      <p style={{ color: '#888', marginBottom: '40px' }}>Autonomous Startup Analysis Pipeline</p>

      <h3 style={{ color: '#aaa', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px', marginBottom: '20px' }}>Agent Pipeline</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {agents.map((agent, index) => {
          const isCompleted = activeStep > index;
          const isProcessing = activeStep === index;

          return (
            <div key={index} style={{ 
              backgroundColor: '#161616', 
              border: `1px solid ${isProcessing ? '#22c55e' : '#333'}`, 
              borderRadius: '12px', 
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'all 0.5s'
            }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: isCompleted ? '#22c55e' : 'white' }}>{agent.name}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{agent.desc}</p>
                <span style={{ 
                  color: isProcessing ? '#22c55e' : isCompleted ? '#16a34a' : '#888', 
                  fontSize: '12px', 
                  display: 'block', 
                  marginTop: '8px',
                  fontWeight: isProcessing ? 'bold' : 'normal'
                }}>
                  {isProcessing ? '● Processing...' : isCompleted ? '✔ Completed' : 'Waiting...'}
                </span>
              </div>
              <div style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                backgroundColor: isProcessing ? '#22c55e' : isCompleted ? '#16a34a' : '#444',
                boxShadow: isProcessing ? '0 0 10px #22c55e' : 'none'
              }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
