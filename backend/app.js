const express = require('express')
const app = express()
const auth = require('./routes/auth');
const category = require('./routes/category');
const cors = require('cors');
app.use(express.json());
const transaction = require('./routes/transaction');

const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:3000'];
  
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions))


app.use('/api/v1', auth);
app.use('/api/v1', category);
app.use('/api/v1', transaction);

module.exports = app;