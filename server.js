'use strict';

// (*******REQUIRE****** (like import but for the backend)
//
const express = require('express');
require('dotenv').config();
const cors = require('cors');

// *** app === server - Need to call Express to create the server
const app = express();
// *** MIDDLEWARE *** allow anoyone to hit my server
app.use(cors());

const PORT = process.env.PORT || 3002;


app.listen(PORT, () => console.log(`We are up on port ${PORT}`));

// **** ENDPOINTS ****
// *** 1ST ARG - ENDPOINT URL
// *** 2ND ARG - CALLBACK WHICH WILL EXECUTE WHEN THAT ENDPOINT IS HIT
//		** 2 parameters: request, response
app.get('/', (req, res) => {
	res.status(200).send('Welcome to My Server');
});

app.get('/hello', (req, res) => {
	let firstName = request.query.firstName;
	let lastName = request.query.lastName;

	console.log(request.queery);
	
	response.status(200).send(`Hello ${firstName} ${lastName}, welcome to my server!`);
});

// *** CATCH ALL ENDPOINT SHOULD BE THE LAST DEFINED ***
app.get('*', (req, res) => {
	res.status(404).send('This page does not exist.');
});
