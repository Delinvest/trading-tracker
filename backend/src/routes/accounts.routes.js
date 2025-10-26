const express = require('express');
const router = express.Router();

// Base de données temporaire en mémoire
const accounts = [];

// GET /api/accounts
router.get('/', (req, res) => {
  res.json(accounts);
});

// POST /api/accounts
router.post('/', (req, res) => {
  const { account_name, initial_capital, current_capital, currency } = req.body;

  const newAccount = {
    id: accounts.length + 1,
    user_id: 1, // Temporaire, sera remplacé par l'auth
    account_name,
    initial_capital,
    current_capital,
    currency: currency || 'USD',
    created_at: new Date().toISOString(),
    is_active: true
  };

  accounts.push(newAccount);
  res.status(201).json(newAccount);
});

// DELETE /api/accounts/:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = accounts.findIndex(a => a.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ message: 'Compte non trouvé' });
  }

  accounts.splice(index, 1);
  res.json({ message: 'Compte supprimé' });
});

module.exports = router;