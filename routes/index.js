var express = require('express');
var router = express.Router();

router.get('/year', function(req, res, next) {
  const date = new Date().getUTCFullYear()
  res.json(({year : date}))
});
module.exports = router;
