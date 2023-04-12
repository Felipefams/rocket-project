import express from "express";
import { getAllLaunchs, updateLaunch, createNewLaunch, deleteLaunch, getLaunch} from "../../controllers/launchController";
const router = express.Router();

router.route('/')
    .get(getAllLaunchs)

router.route('/:id')
    .get(getLaunch)
    .post(createNewLaunch)
    .put(updateLaunch)
    .delete(deleteLaunch)

export default router;