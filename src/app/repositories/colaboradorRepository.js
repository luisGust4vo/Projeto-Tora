import db from "../database/conexao.js";

  class ColaboradorRepository {
    
    create(novoUsusario) {
        return new Promise((resolve, reject) => {
            try {
                const sql = 'INSERT INTO db_tora.colaboradores SET ?';
                db.query(sql, novoUsusario, (err, result) => {
                    if (err) return reject('Não foi possível cadastrar');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            } catch (error) {
                return reject('Erro inesperado');
            }
        });
    }



    findAll() {
        return new Promise((resolve, reject) => {
            try {
                const sql = 'SELECT * FROM db_tora.colaboradores;';
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

    findById(id) {
        try {
            const sql = 'SELECT * FROM db_tora.colaboradores WHERE id = ?';
            return new Promise((resolve, reject) => {
                db.query(sql, id, (err, result) => {
                    if (err) return reject('Não foi possível localizar');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            });
        } catch (error) {
            return reject('Erro inesperado');
        }
    }

    findByCpf(cpf) {
        try {
            const sql = 'SELECT * FROM db_tora.colaboradores WHERE cpf = ?';
            return new Promise((resolve, reject) => {
                db.query(sql, cpf, (err, result) => {
                    if (err) return reject('Não foi possível localizar');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            });
        } catch (error) {
            return reject('Erro inesperado');
        }
    }

    update(userId, updatedUser) {
        try {
            const sql = 'UPDATE db_tora.colaboradores SET ? WHERE id = ? ;';
            return new Promise((resolve, reject) => {
                db.query(sql, [updatedUser, userId], (err, result) => {
                    if (err) return reject('Não foi possível atualizar');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            });
        } catch (error) {
            return reject('Erro inesperado');
        }
    }
    
    delete(userId) {
        try {
            const sql = 'DELETE FROM db_tora.colaboradores WHERE id = ?';
            return new Promise((resolve, reject) => {
                db.query(sql, userId, (err, result) => {
                    if (err) return reject('Não foi possível excluir');
                    const row = JSON.parse(JSON.stringify(result));
                    return resolve(row);
                });
            });
        } catch (error) {
            return reject('Erro inesperado');
        }
    }
}

export default new ColaboradorRepository();