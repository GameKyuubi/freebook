var isbn = require('node-isbn');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('HELLO');
  isbn.resolve('9784088728988', function (err, book) {
    if (err) {
      console.log('Book not found', err);
    } else {
      console.log('Book found %j', book);
    }
    res.send(book);
  });
});

module.exports = router;
