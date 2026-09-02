import React, { useState } from 'react';
import SOSModule from './components/SOSModule.jsx';
import MonitoringModule from './components/MonitoringModule.jsx';
import KnowledgeModule from './components/KnowledgeModule.jsx';
import { AlertCircle, Activity, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('sos');

  return (
    <div style={{ backgroundColor: '#f4f6f8', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* Cabeçalho do Aplicativo */}
      <header style={{ backgroundColor: '#2e7d32', color: 'white', padding: '1.2rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Apoio Psicossocial</h1>
        <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.85rem', opacity: 0.9 }}>
          Sistema de Monitoramento e Suporte — Patos de Minas
        </p>
      </header>

      {/* Menu de Navegação entre Abas */}
      <nav style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1b5e20', padding: '0.5rem 0' }}>
        <button
          onClick={() => setActiveTab('sos')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'sos' ? '#fff' : 'rgba(0, 0, 0, 0.7)',
            borderBottom: activeTab === 'sos' ? '3px solid #fff' : '3px solid transparent',
            padding: '0.8rem 1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <AlertCircle size={18} />
          SOS / Emergência
        </button>

        <button
          onClick={() => setActiveTab('monitor')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'monitor' ? '#fff' : 'rgba(0, 0, 0, 0.7)',
            borderBottom: activeTab === 'monitor' ? '3px solid #fff' : '3px solid transparent',
            padding: '0.8rem 1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Activity size={18} />
          Monitoramento
        </button>

        <button
          onClick={() => setActiveTab('info')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'info' ? '#fff' : 'rgba(0, 0, 0, 0.7)',
            borderBottom: activeTab === 'info' ? '3px solid #fff' : '3px solid transparent',
            padding: '0.8rem 1.2rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <BookOpen size={18} />
          Pesquisa
        </button>
      </nav>

      {/* Área de Conteúdo Dinâmico */}
      <main style={{ padding: '1rem 0' }}>
        {activeTab === 'sos' && <SOSModule />}
        {activeTab === 'monitor' && <MonitoringModule />}
        {activeTab === 'info' && <KnowledgeModule />}
      </main>

    </div>
  );
}