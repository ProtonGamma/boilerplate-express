var express = require('express');
var app = express();

app.get("/json", (req, res) => {
    res.json(
        if (process.env.MESSAGE_STYLE === "uppercase") {
        {"message": "HELLO JSON";}
      } else {
        {"message": "Hello json";}
      });
  });


































 module.exports = app;
