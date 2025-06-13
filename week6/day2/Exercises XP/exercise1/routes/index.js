const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('🏠 Welcome to the Homepage!');
});

router.get('/about', (req, res) => {
  res.status(200).send('ℹ️ This is the About Us page.');
});

module.exports = router;
