import express from "express";
import { getAllRockets, updateRocket, createNewRocket, deleteRocket, getRocket} from "../../controllers/rocketController";
const router = express.Router();

router.route('/')
    .get(getAllRockets)

router.route('/:id')
    .get(getRocket)
    .post(createNewRocket)
    .put(updateRocket)
    .delete(deleteRocket)

export default router;