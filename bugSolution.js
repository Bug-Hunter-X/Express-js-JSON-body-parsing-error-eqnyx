const express = require('express');
const app = express();
// Correctly placed JSON body parser middleware
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now correctly contain the JSON data
  // process the data
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});