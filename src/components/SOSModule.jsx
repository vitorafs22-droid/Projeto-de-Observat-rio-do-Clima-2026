import React, { useState } from 'react';
import axios from 'axios';
import { AlertOctagon, MapPin, Phone } from 'lucide-react';

function SOSModule() {
  const [loading, setLoading] = useState(false);

  const triggerAlert = async () => {
    setLoading(true);
    try {
      // Envia a notificação de emergência para o Back-End na porta 3001
      const response = await axios.post('https://mainprojetoobservatoripdoclima.onrender.com/api/sos', {
        userLocation: 'Patos de Minas - MG',
        timestamp: new Date().toISOString()
      });

      alert(`🚨 ${response.data.message}`);
    } catch (error) {
      console.error('Erro ao conectar com o servidor:', error);
      alert('⚠️ O servidor do Render está despertando. Aguarde cerca de 20 segundos e tente clicar novamente!');
    } finally {
      setLoading(false);
    }
  };

  const emergencyContacts = [
    { name: 'CVV (Apoio Emocional)', phone: '188', desc: 'Gratuito e 24 horas' },
    { name: 'SAMU (Emergência Médica)', phone: '192', desc: 'Atendimento de urgência' },
    { name: 'Corpo de Bombeiros', phone: '193', desc: 'Resgate e emergências' },
    { name: 'CAPS II - Patos de Minas', phone: '(34) 3822-9600', desc: 'Atendimento psicossocial' },
    { name: 'CAPS AD - Patos de Minas', phone: '(34) 3822-9700', desc: 'Apoio especializado (Álcool e Drogas)' }
  ];

  return (
    <div style={{ padding: '25px', maxWidth: '550px', margin: '0 auto', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #30363d', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
      {/* Botão Principal de Emergência */}
      <div style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
        <AlertOctagon size={48} color="#d32f2f" style={{ marginBottom: '0.5rem' }} />
        <h2 style={{ margin: '0 0 0.5rem 0', color: '#d32f2f' }}>Apoio de Emergência</h2>
        <p style={{ color: '#ffffff', fontSize: '0.95rem' }}>Pressione o botão abaixo para notificar sua rede de apoio instantaneamente.</p>
        
       
        <button 
          onClick={triggerAlert} 
          disabled={loading}
          style={{
            padding: '18px 32px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: loading ? '#484f58' : '#da3633',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 10px rgba(218, 54, 51, 0.4)',
            width: '100%'
          }}
        >
          {loading ? 'ENVIANDO ALERTA...' : '🚨 DISPARAR ALERTA DE EMERGÊNCIA'}
        </button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #30363d', margin: '20px 0' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Phone size={20} color="#15803d" />
            <h3 style={{ color: '#15803d', margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
              Telefones Úteis — Patos de Minas
            </h3>
        </div>  
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong style={{ color: '#000000' }}>SAMU:</strong><small style={{ color: '#000000' }}> 192 </small>  <small style={{ color: '#000000' }}>(Urgências e crises graves 24h)</small>
          </li>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong style={{ color: '#000000' }}>CAPS II Patos de Minas:</strong> <small style={{ color: '#000000' }}> Suporte especializado em saúde mental </small>
          </li>
          <li style={{ padding: '0.8rem 0', borderBottom: '1px solid #eee' }}>
            <strong style={{ color: '#000000' }}>CVV (Centro de Valorização da Vida):</strong><small style={{ color: '#000000' }}> 188 </small><small style={{ color: '#000000' }}>(Apoio emocional gratuito 24h)</small>
          </li>
          <li style={{ padding: '0.8rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={16} color="#2e7d32" />
            <small style={{ color: '#000000' }}>Em caso de surto psicótico grave, dirija-se à UPA ou peça apoio ao SAMU na região municipal.</small>
          </li>
        </ul>
      
    </div>
  );
}

export default SOSModule;