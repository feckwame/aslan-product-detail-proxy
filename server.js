const express = require('express');
const app = express();
const port = 3011;


app.use((req, res, next) => {
  console.log('===',req.url);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3011');
  if (req.url === '/') {
    res.redirect(301, `${req.url}?product-detail=P001`);
  }
  next();
});

app.use(express.static('./client'));

app.listen(port, () => {
  console.log(`listening at port http://localhost:${port}`);
});
