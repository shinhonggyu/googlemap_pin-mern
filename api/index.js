const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const pinRoute = require('../api/routes/pins');
const userRoute = require('../api/routes/users');

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected!'.cyan.bold))
  .catch((error) => console.log(error));

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

app.listen(8800, () => {
  console.log('Backend server is running!'.yellow.bold);
});
