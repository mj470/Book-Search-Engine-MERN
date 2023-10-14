const router = require('express').Router();
const  express = require('express');
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/api/config', (req, res) => {
  res.json({
    success: true,
  });
});

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
