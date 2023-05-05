const express = require('express');
const router = express.Router();

const health = require('@cloudnative/health-connect');
const healthCheck = new health.HealthChecker();
const pingCheck = new health.PingCheck('google.com');
healthCheck.registerReadinessCheck(pingCheck);

module.exports = (params) => {

  router.get('/live', health.LivenessEndpoint(healthCheck));
  router.get('/ready', health.ReadinessEndpoint(healthCheck));
  return router;
};
