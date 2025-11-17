import {Router} from 'express';

const packageRouter = Router();

packageRouter.get('/', (req, res) => {
    res.send({message: "la ruta paquete funciona bb lina!"});
});

export default packageRouter