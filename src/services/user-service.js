import pgk from 'pg'
import {CONNECTION_STRING} from '../config/env.js'
import User from '../models/user-model.js';

const user = new User();

const { Pool } = pgk;
const pool = new Pool({ connectionString: CONNECTION_STRING})


const getUser = (id) => {

}

export const createUser = async (userInfo) => {
    const query = `
        INSERT INTO employee (first_name, last_name, phone, email, address, birth_date, emergency_contact, password, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        RETURNING *;
    `
    const values = [userInfo.firstName, userInfo.lastName, userInfo.phone, userInfo.email, userInfo.address, userInfo.birth_date, userInfo.emergency_contact, userInfo.password, userInfo.status];

    const result = await pool.query(query, values);
    return result.rows[0]
}

export const logInUser = async (ci, password) => {
    const query = ` 
        SELECT *
        FROM employee
        WHERE ci = $1 and password = $2
    `
    const values = [ci, password]
    const result = await pool.query(query, values);
    console.log(result.rows);
    return result.rows[0]
}