require('dotenv').config();

const express = require('express');
const port = process.env.APP_PORT;
const router = require('./routes/classroom-routes');
const app = express;

app.use(router);

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})