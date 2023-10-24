import colaboradorRepository from "../repositories/colaboradorRepository.js";

class ColaboradorRepository {
    async index(req, res) {
        try {
            const row = await colaboradorRepository.findAll();
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }

    async showId(req, res) {
        const id = req.params.id;
        try {
            const row = await colaboradorRepository.findById(id);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }

    async showCpf(req, res) {
        const cpf = req.params.cpf;
        try {
            const row = await colaboradorRepository.findByCpf(cpf);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }

    async store(req, res) {
        const novoUsuario = req.body;
        try {
            const row = await colaboradorRepository.create(novoUsuario);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }

    async update(req, res) {
        const userId = req.params.id;
        const updatedUser = req.body;
        try {
            const row = await colaboradorRepository.update(userId, updatedUser);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }

    async delete(req, res) {
        const userId = req.params.id;
        try {
            const row = await colaboradorRepository.delete(userId);
            res.json(row);
        } catch (error) {
            res.status(500).json({ error: 'Error' });
        }
    }
}

export default new ColaboradorRepository(); 