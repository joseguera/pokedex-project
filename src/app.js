require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const errorHandler = require('./error-handler');
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')


const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use(express.json());

// api routes

app.get('/users', (req, res, next) => {
  res.send('All users')
})

app.use('/api/auth', authRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler);

module.exports = app;
