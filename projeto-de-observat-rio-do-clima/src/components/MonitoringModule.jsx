import React, { useState } from 'react';
import axios from 'axios';

function MonitoringModule() {
  const [sleepHours, setSleepHours] = useState('');
  const [agitationLevel, setAgitationLevel] = useState('1');
  const [medsTaken, setMedsTaken] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const isRiskDetected = Number(sleepHours) < 5 || Number(agitationLevel) >= 4;

    try {
      // ⚠️ SUBSTITUA PELA SUA URL DO RENDER
      const response = await axios.post('https://SEU-BACKEND-NO-RENDER.onrender.com/api/monitoring', {
        sleepHours: Number(sleepHours),
        agitationLevel: Number(agitationLevel),
        medsTaken,
        alertTriggered: isRiskDetected
      });

      alert(`✅ ${response.data.message}`);
      setSleepHours('');
      setAgitationLevel('1');
      setMedsTaken(false);
    } catch (error) {
      console.error('Erro ao registrar dados:', error);
      alert('⚠️ O servidor do Render está inicializando. Aguarde alguns segundos e tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '25px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#161b22', borderRadius: '12px', border: '1px solid #30363d', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
      <h2 style={{ color: '#58a6ff', marginTop: 0 }}>📊 Monitoramento Diário de Saúde Mental</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#c9d1d9' }}>Horas de sono na última noite:</label>
          <input 
            type="number" 
            value={sleepHours} 
            onChange={(e) => setSleepHours(e.target.value)} 
            placeholder="Ex: 8"
            required
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #30363d', backgroundColor: '#0d1117', color: '#ffffff', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#c9d1d9' }}>Nível de agitação/ansiedade (1 a 5):</label>
          <select 
            value={agitationLevel} 
            onChange={(e) => setAgitationLevel(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #30363d', backgroundColor: '#0d1117', color: '#ffffff', boxSizing: 'border-box' }}
          >
            <option value="1">1 - Baixo / Tranquilo</option>
            <option value="2">2 - Leve</option>
            <option value="3">3 - Moderado</option>
            <option value="4">4 - Alto</option>
            <option value="5">5 - Muito Alto / Intenso</option>
          </select>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input 
            type="checkbox" 
            id="meds" 
            checked={medsTaken} 
            onChange={(e) => setMedsTaken(e.target.checked)} 
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
          <label htmlFor="meds" style={{ color: '#c9d1d9', cursor: 'pointer' }}>Tomei a medicação recomendada hoje</label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{
            padding: '14px',
            backgroundColor: loading ? '#484f58' : '#238636',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '16px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginTop: '10px'
          }}
        >
          {loading ? 'REGISTRANDO...' : 'SALVAR REGISTRO DIÁRIO'}
        </button>
      </form>
    </div>
  );
}

export default MonitoringModule;