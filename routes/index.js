var express = require('express');
var router = express.Router();

router.get('/year', function(req, res, next) {
  const date = new Date().getFullYear().toString()
  console.log('type of is:', typeof date)
  res.json(({year : date}))
});
module.exports = router;
