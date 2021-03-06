const [notFound, errorHandler] = require('./middleware/errorMiddleware');
const connectDb = require('./config/db');

const openWeatherRoutes = require('./routes/openWeatherRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

connectDb();

app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);
app.use('/api/deliveries', deliveryRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/openweather', openWeatherRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
