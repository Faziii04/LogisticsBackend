import pgk from 'pg'
const { Pool } = pgk;
import {CONNECTION_STRING} from '../config/env.js'

const pool = new Pool({connectionString: CONNECTION_STRING})

export const testDBConnection = async () => {
    try {
        const client = await pool.connect();
        console.log("Connection fue exitosa!");
        console.log("Conectado al string: "+ CONNECTION_STRING)
        client.release()
    } catch(err) {
        console.error("Error de conexion", err.stack)
    }
}