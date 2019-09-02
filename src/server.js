import http from 'http';
import express from 'express';
import socket from 'socket.io';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import routes from './routes';

const app = express();

const server = http.createServer(app);
const io = socket(server);

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
