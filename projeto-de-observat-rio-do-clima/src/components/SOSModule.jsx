import React, { useState } from 'react';
import axios from 'axios';

function SOSModule() {
  const [loading, setLoading] = useState(false);

  const triggerAlert = async () => {
    setLoading(true);
    try {
      // ⚠️ SUBSTITUA O LINK ABAIXO PELO SEU LINK DO RENDER
      const response = await axios.post('https://projeto-de-observat-rio-do-clima-20.vercel.app/', {
        userLocation: 'Patos de Minas - MG',
        timestamp: new Date().toISOString()
      });

      alert(`🚨 ${response.data.message}`);
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      alert('⚠️ O servidor do Render está "despertando". Por favor, aguarde uns 20 segundos e tente clicar novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Central de Emergência - RAPS</h2>
      <p>Clique no botão abaixo caso precise de suporte psicológico imediato.</p>
      
      <button 
        onClick={triggerAlert} 
        disabled={loading}
        style={{
          padding: '16px 32px',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: loading ? '#cccccc' : '#d9534f',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '20px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        {loading ? 'ENVIANDO ALERTA...' : '🚨 DISPARAR ALERTA DE EMERGÊNCIA'}
      </button>
    </div>
  );
}

export default SOSModule;