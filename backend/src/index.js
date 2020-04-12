const express = require('express');
const cors = require('cors');
//./routes - demonstra que é um arquivo e não um pacote
const routes = require('./routes');


const app = express();
//modulo que determina quem pode acessar a aplicação
app.use(cors());
//informando que as requisição serão feitas através do metodo JSON
app.use(express.json());
app.use(routes);


//PORTA: endereço = localhost:3333
app.listen(3333);