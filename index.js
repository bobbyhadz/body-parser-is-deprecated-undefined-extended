// body-parser deprecated undefined extended: provide extended option

import express from 'express';
import bodyParser from 'body-parser';

// 👇️ if you use CommonJS require()
// const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post('/register', function (req, res) {
  console.log(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );

  res.send(
    `username: ${req.body.username},
    password: ${req.body.password}`,
  );
});

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
