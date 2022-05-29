let express = require("express");
let cors = require("cors");
const axios = require("axios");

let app = express();

app.use(cors());

const api_key = "123";

app.get('/getSummonerData', async(req, res) => {
  const summonerName = "gzrg28";
  
})

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
