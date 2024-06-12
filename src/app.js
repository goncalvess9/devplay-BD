import gamesController from './controller/gamesController.js';
import userController from './controller/userController.js';


import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(gamesController);
servidor.use(userController);
servidor.use('/storage/games', express.static('storage/games'));

let port = process.env.PORT;
servidor.listen(port, () => console.log("API do malandrinho subiu!"));
