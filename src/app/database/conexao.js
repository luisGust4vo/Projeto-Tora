import mysql from 'mysql2';
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*****',
    database: 'db_tora'
});

conexao.connect();
export default conexao;
