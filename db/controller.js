const models = require('./models');

const controller = {
	user: {
		post: function (req, res) {
			models.user.post(req.body, (err, data) => {
				if (err) {
					res.sendStatus(404);
				} else {
					res.status(200).json(data.insertId);
				}
			});
		},
	},
	address: {
		post: function (req, res) {
			models.address.post(req.body, (err, data) => {
				if (err) {
					res.sendStatus(404);
				} else {
					res.sendStatus(200);
				}
			});
		},
	},
	purchase: {
		post: function (req, res) {
			models.purchase.post(req.body, (err, data) => {
				if (err) {
					res.sendStatus(404);
				} else {
					res.sendStatus(200);
				}
			});
		},
		get: function (req, res) {
			models.purchase.get(req.params.id, (err, data) => {
				if (err) {
					res.sendStatus(404);
				} else {
					res.status(200).json(data);
				}
			});
		},
	},
};

module.exports = controller;
