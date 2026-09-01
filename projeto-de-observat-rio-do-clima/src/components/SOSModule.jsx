import React, { useState } from 'react';
import axios from 'axios';

function SOSModule() {
  const [loading, setLoading] = useState(false);

  const triggerAlert = async () => {
    setLoading(true);
    try {
      // ⚠️ SUBSTITUA PELA SUA URL DO RENDER
      const response = await axios.post('https://SEU-BACKEND-NO-RENDER.onrender.com/api/sos', {
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
    <div style={{ padding: '25px', maxWidth: '550px', margin: '0 auto', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
      <h2 style={{ textAlign: 'center', color: '#ff7b72', marginTop: 0 }}>🚨 Central de Emergência - RAPS</h2>
      <p style={{ textAlign: 'center', color: '#c9d1d9' }}>
        Clique no botão para acionar o alerta ou utilize os telefones diretos de socorro.
      </p>
      
      {/* Botão de Disparo */}
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
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

      {/* Lista de Telefones Úteis */}
      <h3 style={{ color: '#58a6ff', marginBottom: '15px' }}>📞 Telefones de Emergência e Apoio</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {emergencyContacts.map((contact, index) => (
          <div 
            key={index}
            style={{
              padding: '14px',
              backgroundColor: '#0d1117',
              borderRadius: '8px',
              borderLeft: '4px solid #da3633',
              borderTop: '1px solid #21262d',
              borderRight: '1px solid #21262d',
              borderBottom: '1px solid #21262d',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong style={{ display: 'block', color: '#ffffff', fontSize: '15px' }}>{contact.name}</strong>
              <small style={{ color: '#8b949e' }}>{contact.desc}</small>
            </div>
            <a 
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              style={{
                backgroundColor: '#da3633',
                color: '#ffffff',
                padding: '8px 14px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px'
              }}
            >
              📞 {contact.phone}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SOSModule;