const express = require("express");
const mongoose = require("mongoose");
const requireDir = require('require-dir');
const cors = require('cors');
require('dotenv').config();
//iniciando o app
const app = express();

///conectando com o DB
mongoose.connect(process.env.CONNECTIONSTRING,
    { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');
const Product = mongoose.model('Product');

//primeira Rota
app.use(cors());
app.use(express.json());
app.use('/', require('./src/routes'));


app.listen(3002, () => console.log('Servidor Online na porta 3002'));
