const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here

app.get('/', (req, res) => {
  res.send(' Hello world!');
});
app.post('/add', (req, res) => {
  let n1 = parseFloat(req.body.num1);
  let n2 = parseFloat(req.body.num2);
  let sum = n1 + n2;

  if (Number.isNaN(sum)) {
    return res.status(200).json({
      status: 'success',
      message: 'Invalid data types',
    });
  } else if (n1 < -1000000 || n2 < -1000000 || sum < -1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Underflow',
    });
  } else if (n1 > 1000000 || n2 > 1000000 || sum > 1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Overflow',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'the sum of given two numbers',
      sum: sum,
    });
  }
});

app.post('/divide', (req, res) => {
  let n1 = parseFloat(req.body.num1);
  let n2 = parseFloat(req.body.num2);
  let sum = n1 / n2;
  if (sum === Infinity) {
    return res.status(200).json({
      status: 'error',
      message: 'Cannot divide by zero',
    });
  } else if (Number.isNaN(sum)) {
    return res.status(200).json({
      status: 'success',
      message: 'Invalid data types',
    });
  } else if (n1 < -1000000 || n2 < -1000000 || sum < -1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Underflow',
    });
  } else if (n1 > 1000000 || n2 > 1000000 || sum > 1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Overflow',
    });
  } else {
    res.status(200).json({
      status: n2 === 0 ? 'error' : 'success',
      message:
        n2 === 0 ? 'Cannot divide by zero' : 'The division of given numbers',
      result: sum,
    });
  }
});
app.post('/sub', (req, res) => {
  let n1 = parseFloat(req.body.num1);
  let n2 = parseFloat(req.body.num2);
  let sum = n1 - n2;
  if (Number.isNaN(sum)) {
    return res.status(200).json({
      status: 'success',
      message: 'Invalid data types',
    });
  } else if (n1 < -1000000 || n2 < -1000000 || sum < -1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Underflow',
    });
  } else if (n1 > 1000000 || n2 > 1000000 || sum > 1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Overflow',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'the difference of given two numbers',
      difference: sum,
    });
  }
});
app.post('/multiply', (req, res) => {
  let n1 = parseFloat(req.body.num1);
  let n2 = parseFloat(req.body.num2);
  let sum = n1 * n2;
  if (Number.isNaN(sum)) {
    return res.status(200).json({
      status: 'success',
      message: 'Invalid data types',
    });
  } else if (n1 < -1000000 || n2 < -1000000 || sum < -1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Underflow',
    });
  } else if (n1 > 1000000 || n2 > 1000000 || sum > 1000000) {
    return res.status(200).json({
      status: 'success',
      message: 'Overflow',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: 'The product of given numbers',
      result: sum,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
