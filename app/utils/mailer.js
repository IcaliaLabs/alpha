var sendgrid = require('sendgrid')("SENDGRID_APIKEY");

export function sendUserMail(userEmail) {
	let email = new sendgrid.Email();

	email.addTo(userEmail);
	email.setFrom("you@youremail.com");
	email.setSubject("Sending with SendGrid is Fun");
	email.setHtml("and easy to do anywhere, even with Node.js");

	sendgrid.send(email);
}



