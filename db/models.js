const mysql = require('mysql');
const connection = mysql.createConnection({
	user: 'root',
	password: 'password',
	database: 'checkout',
});

connection.connect((err) => {
	if (err) throw err;
	console.log('Connected to db');
});

const models = {
	user: {
		post: function (data, callback) {
			connection.query(`INSERT INTO user (name, email, password) VALUES ('${data.name}', '${data.email}', '${data.password}') `, function (err, results) {
				if (err) {
					callback(err);
				} else {
					callback(null, results);
				}
			});
		},
	},
	address: {
		post: function (data, callback) {
			let street = `${data.line1} ${data.line2 ? data.line2 : ''}`;
			let city = `${data.city}, ${data.state} ${data.zip}`;
			connection.query(`UPDATE user set user.streetAddress='${street}', user.cityStateZip='${city}', user.phoneNumber='${data.number}' where user.id=${data.insertId};`, function (err, results) {
				if (err) {
					callback(err);
				} else {
					callback(null, results);
				}
			});
		},
	},
	purchase: {
		post: function (data, callback) {
			connection.query(`UPDATE user set user.cc='${data.cc}', user.expDate='${data.exp}', user.cvv='${data.cvv}', user.billingZip='${data.billingZip}' where user.id=${data.insertId};`, function (
				err,
				results,
				fields
			) {
				if (err) {
					callback(err);
				} else {
					callback(null, results);
				}
			});
		},

		get: function (id, callback) {
			connection.query(`SELECT * from user WHERE id=${id}`, function (err, results) {
				if (err) {
					callback(err);
				} else {
					callback(null, results);
				}
			});
		},
	},
};

module.exports = models;
