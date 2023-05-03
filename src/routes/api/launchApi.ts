import express from "express";
import { getAllLaunchs, updateLaunch, createNewLaunch, deleteLaunch, getLaunch} from "../../controllers/LaunchController";

const router = express.Router();

router.route('/')
    .get(getAllLaunchs)
    .post(createNewLaunch)

router.route('/:id')
    .get(getLaunch)
    .put(updateLaunch)
    .delete(deleteLaunch)

export default router;