import ServicePost from "../services/superheroService.js";

class SuperheroController {
    async create(req, res) {
        try {
            const hero = await ServicePost.create(req.body);
            return res.status(200).json(hero);
        } catch (e) {
            console.log(e);
        }
    }

    async getAll(req, res) {
        try {
            const heroes = await ServicePost.getAll();
            return res.status(200).json(heroes);
        } catch (e) {
            console.log(e);
        }
    }

    async getOne(req, res) {
        try {
            const heroById = await ServicePost.getOne(req.params.id);
            return res.status(200).json(heroById);
        } catch (e) {
            console.log(e);
        }
    }

    async update(req, res) {
        try {
            const updatedHero = await ServicePost.update(req.body);
            return res.status(200).json(updatedHero)
        } catch (e) {
            console.log(e);
        }
    }

    async delete(req, res) {
        try {
            const deletedHero = await ServicePost.delete(req.params.id);
            return res.json(deletedHero)
        } catch (e) {
            console.log(e);
        }
    }
}

export default new SuperheroController();