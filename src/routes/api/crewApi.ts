import express from "express";
import { getAllCrews, updateCrew, createNewCrew, deleteCrew, getCrew} from "../../controllers/crewController";
const router = express.Router();

router.route('/')
    .get(getAllCrews)
    .post(createNewCrew)

router.route('/:id')
    .get(getCrew)
    .put(updateCrew)
    .delete(deleteCrew)

export default router;