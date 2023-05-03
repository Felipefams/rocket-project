import express from "express";
import { CrewmanController } from "../../controllers/CrewmanController";


const {getAllCrewman, createCrewman, getCrewmanById, updateCrewman, deleteCrewmanById } = new CrewmanController();

const router = express.Router();

router.route('/')
    .get(getAllCrewman)
    .post(createCrewman)

router.route('/:id')
    .get(getCrewmanById)
    .put(updateCrewman)
    .delete(deleteCrewmanById)

export default router;