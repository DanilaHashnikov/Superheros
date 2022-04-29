import Router from "express";
import SuperheroController from "./superheroController.js";
const router = new Router();

router.get('', SuperheroController.getAll);
router.post('', SuperheroController.create);
router.delete('/:id', SuperheroController.delete);
router.get('/:id', SuperheroController.getOne);
router.put('/:id/edit', SuperheroController.update);

export default router;