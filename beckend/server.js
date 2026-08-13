const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // O servidor rodará na porta 3001 (enquanto o React roda na 5173)

// Middlewares
app.use(cors()); // Permite que o Front-End (React) faça requisições para este servidor
app.use(express.json()); // Permite receber dados no formato JSON

// Simulação de banco de dados em memória
const monitoringLogs = [];

// 1. ROTA DE TESTE (Para ver se o servidor está vivo)
app.get('/', (req, res) => {
  res.send('Servidor de Apoio Psicossocial (Patos de Minas) está rodando!');
});

// 2. ROTA DE EMERGÊNCIA (SOS)
app.post('/api/sos', (req, res) => {
  const { userLocation, timestamp } = req.body;
  
  console.log(`[ALERTA SOS RECEBIDO em ${timestamp}]: Localização aproximada - ${userLocation || 'Patos de Minas'}`);
  
  // Aqui no futuro podemos integrar com Twilio (SMS/WhatsApp) ou Nodemailer (E-mail)
  res.status(200).json({ 
    success: true, 
    message: 'Alerta de emergência processado e notificações disparadas para a rede de apoio!' 
  });
});

// 3. ROTA DE MONITORAMENTO (Recebe e salva os relatórios diários)
app.post('/api/monitoring', (req, res) => {
  const { sleepHours, agitationLevel, medsTaken, alertTriggered } = req.body;

  const newLog = {
    id: Date.now(),
    date: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    sleepHours,
    agitationLevel,
    medsTaken,
    alertTriggered
  };

  monitoringLogs.push(newLog);
  console.log('NOVO REGISTRO DE MONITORAMENTO:', newLog);

  res.status(201).json({
    success: true,
    message: 'Dados diários registrados com sucesso no servidor!',
    totalLogs: monitoringLogs.length
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor Back-End rodando em http://localhost:${PORT}`);
});