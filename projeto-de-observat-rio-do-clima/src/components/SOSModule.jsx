import React, { useState } from 'react';
import axios from 'axios';

function SOSModule() {
  const [loading, setLoading] = useState(false);

  const triggerAlert = async () => {
    setLoading(true);
    try {
      // ⚠️ SUBSITUA PELA SUA URL DO RENDER
      const response = await axios.post('https://projeto-de-observat-rio-do-clima-20.vercel.app/', {
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
    <div style={{ padding: '24px', maxWidth: '550px', margin: '0 auto', backgroundColor: '#1e1e1e', borderRadius: '12px', border: '1px solid #333', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
      <h2 style={{ textAlign: 'center', color: '#ff6b6b', marginTop: 0 }}>🚨 Central de Emergência - RAPS</h2>
      <p style={{ textAlign: 'center', color: '#000000', fontSize: '14px' }}>
        Clique no botão para acionar o alerta ou utilize os telefones diretos de socorro.
      </p>
      
      {/* Botão SOS */}
      <div style={{ textAlign: 'center', marginBottom: '30px', marginTop: '20px' }}>
        <button 
          onClick={triggerAlert} 
          disabled={loading}
          style={{
            padding: '18px 32px',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: loading ? '#000000' : '#d9534f',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 4px 12px rgba(217, 83, 79, 0.4)',
            width: '100%',
            transition: '0.2s'
          }}
        >
          {loading ? 'ENVIANDO ALERTA...' : '🚨 DISPARAR ALERTA DE EMERGÊNCIA'}
        </button>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #000000', margin: '24px 0' }} />

      {/* Lista de Telefones */}
      <h3 style={{ color: '#64b5f6', marginBottom: '16px' }}>📞 Telefones de Emergência e Apoio</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {emergencyContacts.map((contact, index) => (
          <div 
            key={index}
            style={{
              padding: '14px',
              backgroundColor: '#2a2a2a',
              borderRadius: '8px',
              borderLeft: '4px solid #ff6b6b',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <strong style={{ display: 'block', color: '#fff', fontSize: '15px' }}>{contact.name}</strong>
              <small style={{ color: '#000000' }}>{contact.desc}</small>
            </div>
            <a 
              href={`tel:${contact.phone.replace(/[^0-9]/g, '')}`}
              style={{
                backgroundColor: '#d9534f',
                color: 'white',
                padding: '8px 14px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '13px'
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