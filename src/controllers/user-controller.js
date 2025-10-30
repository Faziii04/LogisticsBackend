import User from "../models/user-model.js"
import { createUser } from "../services/user-service.js"

export const getUser = async (req, res, next) => {
    try {

    } catch {

    }
}

export const singUp = async (req, res, next) => {
    try {
        const data = req.body

        if (!data.firstName || !data.email || !data.password) {
            return res.status(400).json({message: "Campos requeridos"})
        }

        const newUser = new User(
            data.firstName,
            data.lastName,
            data.phone,
            data.email,
            data.address,
            data.birth_date,
            data.emergency_contact,
            data.password,
            data.status
        );

        const insertedUser = await createUser(newUser);
        res.status(201).json(insertedUser);
    } catch(err) {
        console.log("Error al crear usuario", err);
        res.status(500).json({
            message: "Error interno",
            error: err.message
        })
    }
}
export const singIn = async (req, res , next) => {
    try {
        
    } catch {

    }
}
