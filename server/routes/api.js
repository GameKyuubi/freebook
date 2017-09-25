const isbn = require('node-isbn');
const express = require('express');
const { promisify } = require('util');
const router = express.Router();

router.get('/book', async (req, res) => {
  console.log('HELLO');
  const resolveAsync = promisify(isbn.resolve);

  try {
    const book = await resolveAsync(req.query.isbn);
    console.log('Book found %j', book);
    res.send(book);
  }
  catch (err) {
    console.log('Book not found!', err);
    res.status(404).send('Book not found!');
  }
});

module.exports = router;
