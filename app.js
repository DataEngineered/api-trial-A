const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
dotenv.config({path: '.env'})

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(userRoutes);

app.listen(PORT, () => {
  console.log('API A server is running on port 3000');
});