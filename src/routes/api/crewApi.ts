import express from "express";
import { CrewService } from "../../service/CrewService";
import { CrewController } from "../../controllers/CrewController";

const {getAll, create, getById, update, deleteById } = new CrewController(new CrewService);
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;