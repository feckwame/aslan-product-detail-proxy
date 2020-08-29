const express = require('express');
const cors = require('cors');
const app = express();
const port = 3011;

app.use(cors());
app.use((req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3011');
  console.log('===',req.url);
  if (req.url === '/') {
    res.redirect(301, `${req.url}?productId=P001`);
  }
  next();
  // res.end()
});

app.use(express.static('./client'));

app.listen(port, () => {
  console.log(`listening at port http://localhost:${port}`);
});
