
// const db = require('./api/queries')
// import db from './api/queries.js';


// import express from 'express';
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log(`listening on ${port}`);
});

