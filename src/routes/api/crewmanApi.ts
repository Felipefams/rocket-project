import express from "express";
import { crewmanController } from "../../controllerFactory";

const {getAll, create, getById, update, deleteById } = crewmanController;
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;