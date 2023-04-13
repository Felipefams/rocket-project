import express from "express";
import { getAllCrewmen, updateCrewman, createNewCrewman, deleteCrewman, getCrewman} from "../../controllers/crewmanController";
const router = express.Router();

router.route('/')
    .get(getAllCrewmen)
    .post(createNewCrewman)

router.route('/:id')
    .get(getCrewman)
    .put(updateCrewman)
    .delete(deleteCrewman)

export default router;