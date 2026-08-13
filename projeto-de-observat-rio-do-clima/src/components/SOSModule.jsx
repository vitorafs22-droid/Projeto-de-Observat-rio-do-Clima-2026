import React from 'react';
import { AlertOctagon, PhoneCall, MapPin } from 'lucide-react';
import axios from 'axios';

export default function SOSModule() {
  const triggerAlert = async () => {
    try {
      // Envia a notificação de emergência para o Back-End na porta 3001
      const response = await axios.post('http://localhost:3001/api/sos', {
        userLocation: 'Patos de Minas - MG',
        timestamp: new Date().toISOString()
      });

      alert(`🚨 ${response.data.message}`);
    } catch (error) {
      console.error("Erro ao conectar ao servidor SOS:", error);
      alert("⚠️ Erro ao comunicar com o servidor. Telefones de emergência locais continuam disponíveis abaixo!");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      
      {/* Botão Principal de Emergência */}
      <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
        <AlertOctagon size={48} color="#d32f2f" style={{ marginBottom: '0.5rem' }} />
        <h2 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f' }}>Apoio de Emergência</h2>
        <p style={{ color: '#555', fontSize: '0.95rem' }}>Pressione o botão abaixo para notificar sua rede de apoio instantaneamente.</p>
        
        <button 
          onClick={triggerAlert}
          style={{
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            borderRadius: '50px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '1rem',
            boxShadow: '0 4px 10px rgba(211, 47, 47, 0.3)'
          }}
        >
          ACIONAR BOTÃO SOS
        </button>
      </div>

      {/* Rede de Atendimento em Patos de Minas */}
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b5e20', marginTop: 0 }}>
          <PhoneCall size={20} />
          Telefones Úteis — Patos de Minas
        </h3>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong>SAMU:</strong> 192 <small style={{ color: '#666' }}>(Urgências e crises graves 24h)</small>
          </li>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong>CAPS II Patos de Minas:</strong> Suporte especializado em saúde mental
          </li>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong>CVV (Centro de Valorização da Vida):</strong> 188 <small style={{ color: '#666' }}>(Apoio emocional gratuito 24h)</small>
          </li>
          <li style={{ padding: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="#2e7d32" />
            <small style={{ color: '#555' }}>Em caso de surto psicótico grave, dirija-se à UPA ou peça apoio ao SAMU na região municipal.</small>
          </li>
        </ul>
      </div>

    </div>
  );
}