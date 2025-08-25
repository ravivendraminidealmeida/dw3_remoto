require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.APP_PORT;

const { GetAllSalasDeAulas } = require('./features/students.js');

app.use(express.json());

app.get('/', (req, res) => {
	res.json(GetAllSalasDeAulas());
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
