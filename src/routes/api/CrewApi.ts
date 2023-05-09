import express from "express";
import { crewController } from "../../controllerFactory";
const {getAll, create, getById, update, deleteById } = crewController;
const router = express.Router();

router.route('/')
    .get(getAll)
    .post(create)

router.route('/:id')
    .get(getById)
    .put(update)
    .delete(deleteById)

export default router;