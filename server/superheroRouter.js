import Router from "express";
import SuperheroController from "./superheroController.js";
const router = new Router();

router.get('', SuperheroController.getAll);
router.get('/:id', SuperheroController.getOne);
router.post('', SuperheroController.create);
router.put('', SuperheroController.update);
router.delete('/:id', SuperheroController.delete);

export default router;