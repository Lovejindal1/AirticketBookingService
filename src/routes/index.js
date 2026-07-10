const express = require('express');

const v1ApiRoutes = require('./v1/index.js')

const router = express.router();

router.use('/v1', v1ApiRoutes);

module.exports = router;