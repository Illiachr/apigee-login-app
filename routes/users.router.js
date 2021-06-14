const { Router } = require('express');
const logger = require('../helpers/logger');

const router = Router();

router.route('/login')
  .get((req, res) => {
    // logger.debug(`/login -> REQ query scope >>> ${req.query.scope}`);
    res.render('index', {
      title: 'Apigee Login Service'
    });
  })
  .post((req, res) => {
    res.send(req.body);
  });

router.route('/registration')
  .get((req, res) => {
    // logger.debug(`/registration -> REQ query scope >>> ${req.query.scope}`);
    res.render('registration', {
      title: 'Apigee Login Service'
    });
  })
  .post((req, res) => {
    res.send(req.body);
  });

module.exports = router;
