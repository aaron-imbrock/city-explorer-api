'use strict';

// (*******REQUIRE****** (like import but for the backend)
//
const express = require('express');
require('dotenv').config();
const cors = require('cors');

// *** app === server - Need to call Express to create the server
const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
	res.send('Hello World!')
});

app.listen(PORT, () => console.log(`We are up on port ${PORT}`));


