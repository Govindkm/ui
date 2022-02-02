const express = require("express");
require("dotenv").config();

const { connectToDB } = require("./database/db");

port = process.env.EXPRESS_PORT || 3000;

const app = express();

connectToDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
