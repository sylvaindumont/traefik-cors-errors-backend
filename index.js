const STATUS_CODES = require('http').STATUS_CODES;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const handleRequest = (req, res) => {
  const status = req.params.status;
  console.log(`handled`, req.method, req.url);
  if (isNaN(status)) return res.status(502).send(`502 ${STATUS_CODES[502]}`);
  res.status(status).send(`${status} ${STATUS_CODES[status]}`);
};

app.options('/*', (req, res) => res.status(204));
app.get('/:status', handleRequest);
app.head('/:status', handleRequest);
app.put('/:status', handleRequest);
app.patch('/:status', handleRequest);
app.post('/:status', handleRequest);
app.delete('/:status', handleRequest);
app.get('/*', (req, res) => res.status(502).send(`502 ${STATUS_CODES[502]}`));

app.listen(3000, () => console.log('errors handler ready'));
