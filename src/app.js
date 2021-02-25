const express = require('express');
const cors = require('cors');
const morgand =  require('morgan');
const morgan = require('morgan');

//Initializacions
const app = express();

//Settings
app.set('port', process.env.SERV_PORT || 5000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes

app.get('/', (req, res) =>{
    res.send('Holi prrita');
});


app.use('/users', require('./routes/users'));

app.use('/notes', require('./routes/notes'));

module.exports = app;
