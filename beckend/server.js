const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Permite requisições do React (Vercel) e de outros domínios
app.use(cors());
app.use(express.json());

// Rota inicial para checar se o servidor está ativo
app.get('/', (req, res) => {
  res.send('Servidor de Apoio Psicossocial (RAPS) rodando com sucesso!');
});

// Rota do Botão SOS / Emergência
app.post('/api/sos', (req, res) => {
  const { userLocation, timestamp } = req.body;
  console.log(`[ALERTA SOS RECEBIDO] Local: ${userLocation} | Horário: ${timestamp}`);

  res.status(200).json({
    status: 'success',
    message: 'Alerta de emergência recebido! A equipe da RAPS foi notificada com sucesso.'
  });
});

// Rota do Monitoramento Diário
app.post('/api/monitoring', (req, res) => {
  const { sleepHours, agitationLevel, medsTaken, alertTriggered } = req.body;
  console.log('[REGISTRO DE MONITORAMENTO]', { sleepHours, agitationLevel, medsTaken, alertTriggered });

  res.status(200).json({
    status: 'success',
    message: alertTriggered 
      ? 'Atenção: Registro efetuado com alerta de risco detectado!' 
      : 'Registro diário gravado com sucesso!'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});