var express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());


app.use(
    bodyParser.urlencoded({
        extendedL: false
    })
)

const mongoURI = 'mongodb://localhost:127.0.0.1/my-blog'

mongoose.connect(mongoURI, { useNewUrlParser: true }, function (err) {
    if (err) {
        throw err;
    } else {
        console.log(`Successfully connected to `);
    }
});

mongoose
  .connect(mongoURI,  {useNewUrlParser: true})
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.log(err))


var Users = require('./routes/Users');

app.use('/users' , Users)

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});

















































