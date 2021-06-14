const app = require('./app');
const logger = require('./helpers/logger');

app.listen(app.get('port'), () => {
  logger.info(`Server has been started on port ${app.get('port')}`);
});
