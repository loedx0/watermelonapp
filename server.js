const express = require('express');
const app = express();
require("dotenv").config({path: "./config.env"});
const cors = require('cors');
app.use(cors({
  origin: 'https://housecanary.loed.repl.co'
}));

app.use(require('./api/fetch_house'))

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});
