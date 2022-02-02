const mongo = require("mongoose");
require("dotenv").config();

const dbURI = `${
  process.env.DB_HOST + process.env.DB_NAME
}?retryWrites=true&w=majority`;

connectToDB() {
    mongo
  .connect(dbURI, (error) => {
    console.log(error);
  })
  .then((response) => {
    console.log("Connected to DB");
  });
}

module.exports = {connectToDB}
