import express, { Request, Response } from 'express'
import helmet from 'helmet';
import http from 'http';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import { corsOptions } from './constant';
import { Server, Socket } from 'socket.io';

const app = express()
app.use(helmet());
app.use(cors(corsOptions));
app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
const server = http.createServer(app);
const port = process.env.PORT || 8080

export const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.get('/', (_req: Request, res: Response) => {
  return res.send('Express Typescript on Vercel')
})

app.get('/ping', (_req: Request, res: Response) => {
  return res.send('pong 🏓')
})

server.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})