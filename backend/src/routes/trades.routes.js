const express = require('express');
const router = express.Router();

// Base de données temporaire
const trades = [];

// GET /api/trades?account_id=X
router.get('/', (req, res) => {
  const { account_id } = req.query;
  
  if (account_id) {
    const accountTrades = trades.filter(t => t.account_id === parseInt(account_id));
    return res.json(accountTrades);
  }
  
  res.json(trades);
});

// POST /api/trades
router.post('/', (req, res) => {
  const tradeData = req.body;
  
  const newTrade = {
    id: trades.length + 1,
    ...tradeData,
    created_at: new Date().toISOString()
  };
  
  trades.push(newTrade);
  res.status(201).json(newTrade);
});

// GET /api/trades/:id
router.get('/:id', (req, res) => {
  const trade = trades.find(t => t.id === parseInt(req.params.id));
  
  if (!trade) {
    return res.status(404).json({ message: 'Trade non trouvé' });
  }
  
  res.json(trade);
});

// DELETE /api/trades/:id
router.delete('/:id', (req, res) => {
  const index = trades.findIndex(t => t.id === parseInt(req.params.id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'Trade non trouvé' });
  }
  
  trades.splice(index, 1);
  res.json({ message: 'Trade supprimé' });
});

module.exports = router;