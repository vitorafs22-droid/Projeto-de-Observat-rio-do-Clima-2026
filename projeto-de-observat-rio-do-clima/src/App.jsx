import React, { useState } from 'react';
import SOSModule from './components/SOSModule';
import MonitoringModule from './components/MonitoringModule';

function App() {
  const [activeTab, setActiveTab] = useState('sos');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', backgroundColor: '#121212', color: '#ffffff', paddingBottom: '40px' }}>
      {/* Cabeçalho */}
      <header style={{ backgroundColor: '#1f1f1f', color: '#ffffff', padding: '24px', textAlign: 'center', borderBottom: '1px solid #333' }}>
        <h1 style={{ margin: 0, fontSize: '26px', color: '#64b5f6' }}>Rede de Atenção Psicossocial (RAPS)</h1>
        <p style={{ margin: '6px 0 0 0', color: '#aaa', fontSize: '14px' }}>Patos de Minas - MG</p>
      </header>

      {/* Navegação */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px', padding: '0 10px' }}>
        <button 
          onClick={() => setActiveTab('sos')}
          style={{
            padding: '12px 24px',
            fontSize: '15px',
            borderRadius: '6px',
            border: activeTab === 'sos' ? '1px solid #d9534f' : '1px solid #333',
            cursor: 'pointer',
            backgroundColor: activeTab === 'sos' ? '#d9534f' : '#1e1e1e',
            color: activeTab === 'sos' ? '#ffffff' : '#aaa',
            fontWeight: 'bold',
            transition: '0.2s'
          }}
        >
          🚨 Emergência (SOS)
        </button>

        <button 
          onClick={() => setActiveTab('monitoring')}
          style={{
            padding: '12px 24px',
            fontSize: '15px',
            borderRadius: '6px',
            border: activeTab === 'monitoring' ? '1px solid #0275d8' : '1px solid #333',
            cursor: 'pointer',
            backgroundColor: activeTab === 'monitoring' ? '#0275d8' : '#1e1e1e',
            color: activeTab === 'monitoring' ? '#ffffff' : '#aaa',
            fontWeight: 'bold',
            transition: '0.2s'
          }}
        >
          📊 Monitoramento Diário
        </button>
      </nav>

      {/* Conteúdo da Aba */}
      <main style={{ marginTop: '30px' }}>
        {activeTab === 'sos' && <SOSModule />}
        {activeTab === 'monitoring' && <MonitoringModule />}
      </main>
    </div>
  );
}

export default App;