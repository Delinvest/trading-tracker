const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
const accountsRoutes = require('./routes/accounts.routes');
const tradesRoutes = require('./routes/trades.routes');

app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountsRoutes);
app.use('/api/trades', tradesRoutes);

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ 
    message: '✅ API Trading Tracker fonctionne !',
    timestamp: new Date().toISOString()
  });
});

// Démarre le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`📊 API disponible sur http://localhost:${PORT}/api/health`);
});