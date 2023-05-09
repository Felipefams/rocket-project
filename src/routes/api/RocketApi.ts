import express from "express";
import { rocketController } from "../../controllerFactory";

const {getAll, create, getById, update, deleteById } = rocketController;
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;