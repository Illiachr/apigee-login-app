require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
// const expressPino = require('express-pino-logger');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./openapi/auth-service.yml');
const usersRouter = require('./routes/users.router');
const logger = require('./helpers/logger');
// const errorHandler = require('./_helpers/error-handler');
const app = express();
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// const expressLogger = expressPino({ logger });

const PORT = process.env.PORT || 4000;
app.set('port', PORT);

// app.use(expressLogger);
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

// app.use('/', (req, res) => {
//   logger.debug('Calling res.send');
//   res.send({ msg: 'Hello World!' });
// });
app.use('/', usersRouter);

// app.use(errorHandler);

// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Srart server
module.exports = app;
