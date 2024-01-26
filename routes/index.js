var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



const express = require('express');
const app = express();

app.get('/year', (req, res) => {
  const currentYear = new Date().getFullYear();
  res.send(`Current year is: ${currentYear}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});









module.exports = router;
