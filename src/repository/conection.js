import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'devplaydb'
})

console.log('Conexão dos malandrinhos com o banco de dados ta feita');
export default con;