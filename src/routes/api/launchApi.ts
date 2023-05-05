import express from "express";
import { LaunchService } from "../../service/LaunchService";
import { LaunchController } from "../../controllers/LaunchController";

const {getAll, create, getById, update, deleteById } = new LaunchController(new LaunchService);
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;