import con from "./conection.js";

export async function salvarGames(games) {
    let comando = `
    insert into tb_games (nome_games, preco_games, img_games) 
    values (?, ?, ?)
    `

    let resp = await con.query(comando, [
        games.nome, 
        games.preco, 
        games.img
    ])
    let info = resp[0];

    games.id = info.insertId;
    return games;
}

export async function listarGames () {
    let comando = `
    SELECT * FROM tb_games;
    `

    let resp = await con.query(comando, []);
    let linhas = resp[0];

    return linhas;
}

export async function listClothesPerId(id) {
    let comando = `
    select*from tb_games where id_games = ?
    `;

    let resp = await con.query(comando, [id]);
    let linhas = resp[0];

    return linhas[0];
}

export async function deleteClothes(id) {
    let comando = `
    delete from tb_games where id_games = ?
    `;

    let resp = await con.query(comando, [id]);
    let info = resp[0];

    return info.affectedRows;
}

export async function alterClothes(games, id) {
    const comando = `
    update tb_games set nome_games = ?, preco_games = ?, img_games = ? where id_games = ?
    `;

    try {
        const [rows] = await con.query(comando, [
            games.nome,
            games.preco,
            games.img,
            id
        ]);
        return rows.affectedRows;
    } catch (err) {
        console.log("Erro ao atualizar game", err);
        throw err;
    }
}

export async function alterClothesImage(id, caminho) {
    let comando = `
    update tb_games set img_games = ? where id_games = ?
    `;

    let resp = await con.query (comando, [caminho, id]);
    let info = resp[0];

    return info.affectedRows;
}