const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.resolve(__dirname, 'client/build')));

/** test api to load daat */
app.get('/api/hello', (req, res) => {
  res.json([
    {id: 1, name: 'test'},
    {id: 2, name: 'boss'}
  ]);
});

/** Always return the main index.html, so react-router render the route in the client */
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,  'client/build/index.html'));
});
app.listen(port, () => console.log(`Listening on port ${port}`));