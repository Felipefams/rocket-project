import express from "express";
import { getAllRockets, updateRocket, createNewRocket, deleteRocket, getRocket} from "../../controllers/rocketController";
const router = express.Router();

router.route('/')
    .get(getAllRockets)
    .post(createNewRocket)

router.route('/:id')
    .get(getRocket)
    .put(updateRocket)
    .delete(deleteRocket)

export default router;