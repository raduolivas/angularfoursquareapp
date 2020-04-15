// Get dependencies
const express = require('express');
const path = require('path');

const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/foursquareapp')));

// Catch all other routes and return the index file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/foursquareapp/index.html'));
});

app.get('/env', (req, res) => {
  res.json({client_id: process.env.CLIENT_ID, client_secret: process.env.CLIENT_SECRET});
});

// Start the app by listening on the default Heroku port
console.log('CLIENT ID:::: ', process.env.CLIENT_ID);
app.listen(process.env.PORT || 4200);