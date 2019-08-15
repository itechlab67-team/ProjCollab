    
import express from 'express';
import passport from 'passport';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import https from 'https';
import dotenv from 'dotenv';
// import socketioJwt from 'socketio-jwt';
import socketIO from 'socket.io';
import passportInit from './routes/passport.init';
import routes from './routes/auth.routes/auth.router.networks';
import routesLocal from './routes/auth.routes/routes';

dotenv.config();
const port = process.env.PORT || 8000;
mongoose.connect(`mongodb://localhost:27017/collab`, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err));

const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'logs', 'access.log'), {flags: 'a'}
);
app.use(morgan('combined', { stream: accessLogStream }));

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(passport.initialize())
passportInit()
app.use('/', routes, routesLocal);


const certOptions = {
    key: fs.readFileSync(path.resolve(__dirname + '/services/certs/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname + '/services/certs/server.cert'))
}
const server = https.createServer(certOptions, app);

const io = socketIO(server);
app.set('io', io);

server.listen(port, () => {
    console.log(`Server started on Port ${port}`);
});