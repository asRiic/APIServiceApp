const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {createRoles} = require('./libs/initialSetup')

//Initializacions
const app = express();
createRoles();

//Settings
app.set('port', process.env.SERV_PORT || 6000);

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

app.use('/signin', require)

module.exports = app;
