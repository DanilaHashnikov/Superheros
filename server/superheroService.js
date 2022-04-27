import Superhero from "./superheroModel.js";

class ServicePost {
    async create(superhero) {
        return await Superhero.create(superhero);
    }
    async getOne(id) {
        return await Superhero.findById({ _id: id });
    }
    async getAll() {
        return await Superhero.find();
    }
    async update(superhero) {
        return await Superhero.findByIdAndUpdate(superhero._id, superhero, {new: true})
    }
    async delete(id) {
        return await Superhero.findByIdAndDelete(id);
    }
}


export default new ServicePost();