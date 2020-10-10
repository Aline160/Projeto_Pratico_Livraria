const express = require ("express");
const app = express();

const index = require ("./routes/index")
const funcionarios = require ('./routes/funcionariosRouter');

app.use (express.static('public'));

app.use ('/',index);
app.get ('/funcionarios', funcionarios)



module.exports= app