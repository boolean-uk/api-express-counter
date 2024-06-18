const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (typeof req.app.locals.counter === 'undefined') {
    req.app.locals.counter = 0;
  }
  next();
});

router.get('/', (req, res) => {
  res.json({ counter: req.app.locals.counter });
});

router.post('/increment', (req, res) => {
  req.app.locals.counter += 1;
  res.status(201).json({ counter: req.app.locals.counter });
});

router.post('/decrement', (req, res) => {
  req.app.locals.counter -= 1;
  res.status(201).json({ counter: req.app.locals.counter });
});

router.post('/double', (req, res) => {
  req.app.locals.counter *= 2;
  res.status(201).json({ counter: req.app.locals.counter });
});

router.delete('/', (req, res) => {
  req.app.locals.counter = 0;
  res.json({ counter: req.app.locals.counter });
});

module.exports = router;
