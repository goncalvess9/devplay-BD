import { salvarGames, listarGames, deleteGames, alterGames, alterGamesImage, listGamesPerId } from "../repository/gamesRepository.js";


import {Router} from "express";
import multer from 'multer';


const upload = multer({ dest: 'storage/games' })
const servidor = Router();



servidor.post('/games', upload.single('imagem'), async (req, resp) => {
  let games = req.body;
  if (req.file) {
    games.img = req.file.path;
  }

  let gamesInserido = await salvarGames(games);
  resp.send(gamesInserido);
})

servidor.get('/games', async (req, resp) => {
  let listaGames = await listarGames();
  resp.send(listaGames);
})

servidor.get('/games/:id', async (req, resp) => {
    let id = req.params.id;

    let gamesPerId = await listGamesPerId(id);

    resp.send(gamesPerId);
})

servidor.delete('/games/:id', async (req, resp) => {
    let id = req.params.id;

    let linesAffect = await deleteGames(id);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})

servidor.put('/games/:id', async (req, resp) => {
    let id = req.params.id;
    let clothes = req.body;

    try {
        let linesAffect = await alterGames(clothes, id);
        if (linesAffect == 0)
            resp.status(404).send();
        else
        resp.status(202).send();
    } catch (err) {
        resp.status(500).send("Erro ao atualizar game.");
    }
})

servidor.put('/games/imagem/:id', async (req, resp) => {
    let id = req.params.id;
    let clothes = req.file.path;

    let linesAffect = await alterGamesImage(id, clothes);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})


export default servidor;