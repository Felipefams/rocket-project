import express from "express";
import { LaunchService } from "../../service/LaunchService";
import { LaunchController } from "../../controllers/LaunchController";
import { launchController } from "../../controllerFactory";

const {getAll, create, getById, update, deleteById } = launchController;
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;