import mysql from 'mysql2';
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gustavo22',
    database: 'db_tora'
});

conexao.connect();
export default conexao;
