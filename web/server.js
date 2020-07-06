const express = require("express");
const app = express();
var mysql = require("mysql");
const PORT = process.env.PORT || 5000;
var connection = mysql.createConnection({
  host: "ms",
  user: "root",
  password: "password",
  insecureAuth : true
});


connection.connect((error)=>{
  if (error) throw error;
  console.log("connected to mysql");
});

app.get("/", async (req, res) => {
  console.log(3123);
  connection.query("SELECT 1 + 1 AS solution", function (
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.status(200).send(results[0]);
  });
});

app.listen(PORT, () => console.log("running ..."));