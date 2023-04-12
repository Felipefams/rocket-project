import express from "express";
import { getAllCrews, updateCrew, createNewCrew, deleteCrew, getCrew} from "../../controllers/crewController";
const router = express.Router();

router.route('/')
    .get(getAllCrews)

router.route('/:id')
    .get(getCrew)
    .post(createNewCrew)
    .put(updateCrew)
    .delete(deleteCrew)

export default router;