import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

export default function MonitoringModule() {
  const [sleepHours, setSleepHours] = useState('');
  const [agitationLevel, setAgitationLevel] = useState('1');
  const [medsTaken, setMedsTaken] = useState('sim');
  const [status, setStatus] = useState(null);

  const handleAssessment = async (e) => {
    e.preventDefault();

    const isRiskDetected = (Number(sleepHours) < 5 && sleepHours !== '') || medsTaken === 'nao' || Number(agitationLevel) >= 4;

    try {
      // Envia os dados diários para salvar no banco/memória do servidor Node.js
      await axios.post('https://projetodeobservatoriodoclima2026.onrender.com', {
        sleepHours: Number(sleepHours),
        agitationLevel: Number(agitationLevel),
        medsTaken,
        alertTriggered: isRiskDetected
      });

      if (isRiskDetected) {
        setStatus('warning');
      } else {
        setStatus('normal');
      }
    } catch (error) {
      console.error("Erro ao enviar diário para o servidor:", error);
      alert("Erro ao salvar no servidor. Verifique se o backend está rodando!");
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        
        <h2 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b5e20', marginTop: 0 }}>
          <Activity size={24} />
          Monitoramento Diário de Sinais
        </h2>
        <p style={{ color: '#555', fontSize: '0.9rem' }}>
          Registre os parâmetros diários para acompanhar o padrão de estabilidade e prevenir crises.
        </p>

        <form onSubmit={handleAssessment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Horas de Sono na última noite:
            </label>
            <input 
              type="number" 
              min="0" 
              max="24"
              value={sleepHours}
              onChange={(e) => setSleepHours(e.target.value)}
              placeholder="Ex: 8"
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Nível de Agitação / Ansiedade:
            </label>
            <select 
              value={agitationLevel} 
              onChange={(e) => setAgitationLevel(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            >
              <option value="1">1 - Calmo / Estável</option>
              <option value="2">2 - Leve ansiedade</option>
              <option value="3">3 - Moderado</option>
              <option value="4">4 - Bastante agitado / Pensamentos acelerados</option>
              <option value="5">5 - Extrema agitação / Sinais de alucinação</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.3rem' }}>
              Usou as medicações prescritas corretamente?
            </label>
            <select 
              value={medsTaken} 
              onChange={(e) => setMedsTaken(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box' }}
            >
              <option value="sim">Sim, medicação em dia</option>
              <option value="nao">Não / Esqueceu a dose</option>
            </select>
          </div>

          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#2e7d32', 
              color: 'white', 
              border: 'none', 
              padding: '0.8rem', 
              borderRadius: '6px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '0.5rem'
            }}
          >
            Analisar e Registrar
          </button>
        </form>

        {status === 'warning' && (
          <div style={{ backgroundColor: '#fff3e0', borderLeft: '5px solid #f57c00', padding: '1rem', marginTop: '1.5rem', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#e65100', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={20} />
              Atenção: Indicadores de risco identificados!
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
              Os parâmetros inseridos são fatores de risco para uma descompensação psicopatológica. Recomendamos alertar o cuidador ou contatar o CAPS/Médico de referência.
            </p>
          </div>
        )}

        {status === 'normal' && (
          <div style={{ backgroundColor: '#e8f5e9', borderLeft: '5px solid #2e7d32', padding: '1rem', marginTop: '1.5rem', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#1b5e20', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={20} />
              Registro Estável
            </h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#333' }}>
              Parâmetros dentro da faixa normal. Registrados com sucesso no servidor.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}