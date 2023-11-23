const express = require('express');
const morgan=require('morgan');
const cors=require('cors');

const app = express();

const {mongoose} = require('./database');
const URL="http://localhost:4200";

//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: URL}));
app.use(express.static('./frontend/dist/frontend'));
//routes
app.use('/api/bloqueos',require('./routes/bloqueo.routes'));


//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});