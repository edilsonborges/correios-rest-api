const express = require("express");
const request = require("request");
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/:object", function(req, res, next) {
  let object = req.params.object ? req.params.object.substr(0, 13) : "";
  let options = {
    method: "POST",
    url: "http://webservice.correios.com.br/service/rest/rastro/rastroMobile",
    headers: {
      "Content-Type": "text/xml"
    },
    body:
      "<rastroObjeto><usuario>ECT</usuario><senha>SRO</senha><tipo>L</tipo><resultado>T</resultado><objetos>" +
      object +
      "</objetos><lingua>101</lingua><token></token></rastroObjeto>"
  };
  request(options, function(error, response, body) {
    if (error) throw new Error(error);
    res.send(response.body);
  });
});

app.listen(5150, () => console.log("Server rodando na porta 5150"));
