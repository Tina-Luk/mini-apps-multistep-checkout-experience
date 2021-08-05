const express = require('express');
const app = express();
const port = 3000;
const controller = require('./db/controller.js');

app.use(express.static('public'));
app.use(express.json());

app.post('/user', (req, res) => {
	controller.user.post(req, res);
});

app.post('/address', (req, res) => {
	controller.address.post(req, res);
});

app.post('/purchase', (req, res) => {
	controller.purchase.post(req, res);
});

app.get('/user/:id', function (req, res) {
	controller.purchase.get(req, res);
});

app.listen(port, () => {
	console.log(`listenting at http://localhost:${port}`);
});
