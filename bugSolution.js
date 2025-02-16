const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  console.log('Request Body:', req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Error: Invalid JSON data or missing Content-Type header');
  }
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));