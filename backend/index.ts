import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose, {ConnectOptions} from 'mongoose';
import cron from 'node-cron';
import request from 'request';
import requestIp from 'request-ip';
const PORT = process.env.PORT || 8000;

import {cartRoutes} from './routes/cart';
import {productRoutes} from './routes/product';
import {paymentRoutes} from './routes/payment';
import {cartModel} from './schemas/cartSchema';

dotenv.config();

const app = express();

//     ** FUNCTION TO OVERWRITE req.ip PROPERTY **

// Object.defineProperty(app.request, 'ip', {
//   configurable: true,
//   enumerable: true,
//   get: function () { return '192.178.1.6' }
// })

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

var allowedOrigins = [
  'https://fundamentals.shop',
  'https://fundamentals-server.onrender.com',
  'http://localhost:3000',
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      // if(!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// app.use(cors());

app.use('/', cartRoutes);
app.use('/', productRoutes);
app.use('/', paymentRoutes);

cron.schedule('*/7 * * * *', () => {
  return request(
    {uri: 'https://fundamentals-server.onrender.com/'},
    function (error, response, body) {
      console.log({'response.body': response.body});
      return console.log(
        'Cron job executing in every 7 minutes for keeping server active'
      );
    }
  );
});

// cron.schedule('0 4 * * *', async () => {
//   const deleted = await cartModel.deleteMany({cartItems: []});
//   console.log(
//     'Cron execution every day at 4am (downtime): ' +
//       deleted.deletedCount +
//       ' empty carts deleted'
//   );
// });

const uri: string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`;

const options = {useNewUrlParser: true};

mongoose
  .connect(uri, options as ConnectOptions)
  .catch((err) => console.log(err));

const con = mongoose.connection;

con.on('open', () => {
  console.log('database connected');
});

app.get('/', async (req: Request, res: Response) => {
  res.send('server accepting request');
});

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT} :)`);
});
