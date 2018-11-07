const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');
const session        = require('express-session')
const diaryController = require('./controllers/diaryController');
const authController  = require('./controllers/authController');

require('./db/db');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));


// Require the controller after the middleware

app.use('/api/v1/diary', diaryController);
app.use('/auth/login', authController);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
