
import db from "../database/conexao.js";

class MensagemRepository {
    create(id_usuario, novaLista) {
        return new Promise((resolve, reject) => {
            if(id_usuario == 1){
                const sql = 'INSERT INTO db_tora.mensagem_user SET ?';
                db.query(sql, novaLista, (err, result) => {
                    if (err) {
                        return reject('Não foi possível cadastrar');
                    }
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            }else{
                throw error; 
            }
        }).catch((error) => {
            console.error('Erro ao inserir mensagem:', error);
            throw error; 
        });
    }

    findAll() {
        return new Promise((resolve, reject) => {
            try {
                const sql = 'SELECT * FROM db_tora.mensagem_user;';
                db.query(sql, (err, result) => {
                    if (err) return reject('Não foi possível localizar');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            } catch (error) {
                return reject('Erro inesperado');
            }
        });
    }
}


export default new MensagemRepository();