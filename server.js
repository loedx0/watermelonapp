const express = require('express');
const app = express();

app.use(require('./api/fetch_house'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
