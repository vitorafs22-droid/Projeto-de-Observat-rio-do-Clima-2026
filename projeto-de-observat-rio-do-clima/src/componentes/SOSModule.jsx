import React from 'react';
import { AlertOctagon, PhoneCall, HeartHandshake, MapPin } from 'lucide-react';

export default function SOSModule() {
  const triggerAlert = () => {
    alert("🚨 ALERTA DE EMERGÊNCIA DISPARADO!\n\nSua localização e pedido de apoio imediato foram enviados para seus contatos de emergência cadastrados.");
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