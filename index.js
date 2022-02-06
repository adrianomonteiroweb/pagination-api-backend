const express = require('express');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const swaggerDocs = require('./swagger.json');

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const app = express();

app.use(express.json());

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(routes)

app.listen(PORT, () => console.log(`Online em http://${HOSTNAME}:${PORT}`));
