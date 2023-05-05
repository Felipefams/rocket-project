import express from "express";
import { CrewmanController } from "../../controllers/CrewmanController";
import { CrewmanService } from "../../service/CrewmanService";

const {getAll, create, getById, update, deleteById } = new CrewmanController(new CrewmanService);
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;