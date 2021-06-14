const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: {
    colorize: true,
    timestampKey: 'time'
  }
});

module.exports = logger;
