const express = require ("express");
const app = express();

const index = require ("./routes/index")
const funcionarios = require ('./routes/funcionariosRouter');
const livros = require ("./routes/livrosRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//app.use(express.json()); Pode usar a do proprio express

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  });

app.use (express.static('public'));

app.use ('/',index);
app.use ('/funcionarios', funcionarios)
app.use('/livros',livros)



module.exports= app