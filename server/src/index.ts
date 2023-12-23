import express, {type Response} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose, {type ConnectOptions} from 'mongoose';

const PORT = process.env.PORT || 8000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/?retryWrites=true&w=majority`;

// Mongoose config options
const options = {useNewUrlParser: true};

// Mongoose connection
mongoose
  .connect(uri, options as ConnectOptions)
  .catch((err) => console.log(err));

const connection = mongoose.connection;

connection.on('open', () => {
  console.log('database connected');
});

app.get('/', async (_, res: Response): Promise<void> => {
  res.send('server accepting request');
});

app.listen(PORT, () => {
  console.log(`backend running on port ${PORT} :)`);
});
