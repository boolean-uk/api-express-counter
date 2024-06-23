const express = require('express');
const app = express();

let counter = 0;

app.use(express.json());


app.get('/counter', (req, res) => {
    try {
      console.log(`GET /counter - Current value: ${counter}`);
      res.json({ counter });
    } catch (error) {
      console.error('Error in GET /counter:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/counter', (req, res) => {
    try {
      counter++;
      console.log(`POST /counter - New value: ${counter}`);
      res.json({ counter });
    } catch (error) {
      console.error('Error in POST /counter:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  app.delete('/counter', (req, res) => {
    try {
      counter = 0;
      console.log(`DELETE /counter - Reset value: ${counter}`);
      res.json({ counter });
    } catch (error) {
      console.error('Error in DELETE /counter:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
module.exports = app;