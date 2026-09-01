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
      // ⚠️ SUBSTITUA O LINK ABAIXO PELO SEU LINK DO RENDER
      const response = await axios.post('https://projeto-de-observat-rio-do-clima-20.vercel.app/', {
        sleepHours: Number(sleepHours),
        agitationLevel: Number(agitationLevel),
        medsTaken,
        alertTriggered: isRiskDetected
      });

      alert(`✅ ${response.data.message}`);
      // Limpa os campos do formulário
      setSleepHours('');
      setAgitationLevel('1');
      setMedsTaken(false);
    } catch (error) {
      console.error('Erro ao registrar dados:', error);
      alert('⚠️ O servidor está inicializando. Aguarde alguns segundos e tente novamente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Monitoramento Diário de Saúde Mental</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Horas de sono na última noite:</label>
          <input 
            type="number" 
            value={sleepHours} 
            onChange={(e) => setSleepHours(e.target.value)} 
            placeholder="Ex: 8"
            required
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nível de agitação/ansiedade (1 a 5):</label>
          <select 
            value={agitationLevel} 
            onChange={(e) => setAgitationLevel(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
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
          />
          <label htmlFor="meds">Tomei a medicação recomendada hoje</label>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: loading ? '#cccccc' : '#0275d8',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'REGISTRANDO...' : 'SALVAR REGISTRO DIÁRIO'}
        </button>
      </form>
    </div>
  );
}

export default MonitoringModule;