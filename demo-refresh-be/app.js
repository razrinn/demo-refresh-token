const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(function (req, res, next) {
  setTimeout(next, Math.random() * 150);
});

app.get('/dummy', (req, res, next) => {
  setTimeout(() => {
    if (!req.headers.authorization || req.headers.authorization === 'a') {
      return res.status(401).json({
        message: 'UNAUTHORIZED',
      });
    }
    res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
  }, Math.random() * 1000);
});

app.get('/boxing', (req, res, next) => {
  setTimeout(() => {
    if (!req.headers.authorization || req.headers.authorization === 'a') {
      return res.status(401).json({
        message: 'UNAUTHORIZED',
      });
    }
    res.json(['Tony', 'Lisa', 'Michael', 'Ginger', 'Food']);
  }, Math.random() * 1000);
});

app.post('/refresh', (req, res, next) => {
  setTimeout(() => {
    console.log(req.query);
    if (req.headers.authorization === `a${req.query.count}`) {
      return res.status(200).json({
        token: 'b',
        refreshToken: `a${parseInt(req.query.count) + 1}`
      });
    }
    res.status(401).json({
      message: 'UNAUTHORIZED_INVALID_TOKEN',
    });
  }, 2000);
});

app.listen(8000, () => {
  console.log('Server running on port 8000');
});
