const express = require('express');
const routes = require('./routes');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const app = express();

app.use(express.json());

app.get('/', (_req,res) => {
  res.json({ message: 'Termos de serviço' });
});

app.use(routes)

app.listen(PORT, () => console.log(`Online em http://${HOSTNAME}:${PORT}`));
