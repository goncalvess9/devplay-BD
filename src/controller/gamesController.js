import { salvarGames, listarGames, deleteClothes, alterClothes, alterClothesImage, listClothesPerId } from "../repository/gamesRepository.js";


import {Router} from "express";
let servidor = Router();



servidor.post('/games', async (req, resp) => {
  let games = req.body;

  let gamesInserido = await salvarGames(games);
  resp.send(gamesInserido);
})

servidor.get('/games', async (req, resp) => {
  let listaGames = await listarGames();
  resp.send(listaGames);
})

servidor.get('/games/:id', async (req, resp) => {
    let id = req.params.id;

    let clothesPerId = await listClothesPerId(id);

    resp.send(clothesPerId);
})

servidor.delete('/games/:id', async (req, resp) => {
    let id = req.params.id;

    let linesAffect = await deleteClothes(id);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})

servidor.put('/games/:id', async (req, resp) => {
    let id = req.params.id;
    let clothes = req.body;

    try {
        let linesAffect = await alterClothes(clothes, id);
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

    let linesAffect = await alterClothesImage(id, clothes);
    if (linesAffect == 0)
        resp.status(404).send();
    else
    resp.status(202).send();
})


export default servidor;