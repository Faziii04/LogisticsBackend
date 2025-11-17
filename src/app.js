import express from 'express'
import pgk from 'pg'
import {PORT} from './config/env.js'
import {CONNECTION_STRING} from './config/env.js'

import userRouter from './routes/user.routes.js';
import packageRouter from './routes/package.route.js';

import { testDBConnection } from './controllers/database-controller.js';


const app = express();
const { Pool } = pgk;

const pool = new Pool({ connectionString: CONNECTION_STRING})


app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/packages', packageRouter);


app.use('/', (req, res) => {
    res.send(`<h1 style="color: blue">Este es un h1</h1>`)
})


testDBConnection();
app.get('/', (req, res) => {
    res.send({mensaje: "que tal bro"})
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})