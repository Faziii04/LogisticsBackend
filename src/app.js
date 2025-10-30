import express from 'express'
import pgk from 'pg'
import {PORT} from './config/env.js'
import {CONNECTION_STRING} from './config/env.js'
import userRouter from './routes/user.routes.js';
import { testDBConnection } from './controllers/database-controller.js';

const app = express();
const { Pool } = pgk;

const pool = new Pool({CONNECTION_STRING})

app.use('/api/v1/users', userRouter)
testDBConnection();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})