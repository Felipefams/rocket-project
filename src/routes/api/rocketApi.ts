import express from "express";
import { RocketController } from "../../controllers/RocketController";
import { RocketService } from "../../service/RocketService";

const {getAll, create, getById, update, deleteById } = new RocketController(new RocketService);
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;