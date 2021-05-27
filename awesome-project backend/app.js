const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

const userRouter = require('./routes/user');
const contactRouter = require('./routes/contact');
const chatRouter = require('./routes/chat');

const industrialRouter = require('./routes/admin/industrial.js');
const jobRouter = require('./routes/admin/job.js');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});
// const limiter = rateLimit({
//   max: 1000,
//   windowMs: 60 * 60 * 1000,
//   message: 'Too many requests from this IP, please try again in an hour!',
// });
// app.use('/api', limiter);
app.use(bodyParser.json({ limit: '50mb' }));

//app.use(bodyParser.urlencoded({ extended: false }, { limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 5000,
  })
);
app.use(express.static(path.join(__dirname, 'public')));

// 3) ROUTES
app.use('/api/users', userRouter);
app.use('/api/contacts', contactRouter);
app.use('/api/chat', chatRouter);

// 4) ADMIN ROUTES
app.use('/api/admin/industrial', industrialRouter);
app.use('/api/admin/job', jobRouter);
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
//app.use(globalErrorHandler);
module.exports = app;
