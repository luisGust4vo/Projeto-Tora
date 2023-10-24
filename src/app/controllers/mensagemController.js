
import mensagemRepository from "../repositories/mensagemRepository.js";

class MensagemRepository {
    async store(req, res) {
        const id_usuario = req.params.id_usuario; 
        const novaMensagem = req.body;
        try {
            const row = await mensagemRepository.create(id_usuario, novaMensagem);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Não foi possível cadastrar' });
        }
    }

    async index(req, res) {
        try {
            const row = await mensagemRepository.findAll();
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }
}
export default new MensagemRepository(); 