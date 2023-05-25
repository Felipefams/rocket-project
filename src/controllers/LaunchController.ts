import { Request, Response } from "express";
import { crewService, launchService, rocketService } from "../controllerFactory";
import Launch from "../model/Launch";
import { BaseController } from "./interfaces/BaseController";

export class LaunchController extends BaseController<Launch>{
    override create = async (req: Request, res: Response) => {
        try {
            let crew = req.body.crew;
            let rocket = req.body.rocket;
            if(typeof crew === 'number' ) {
                crew = await crewService.getById(crew);
                if (!crew){
                    return res.status(404).send(`Crew with id ${req.body.crew} not found`);
                }
            }
            if(typeof rocket === 'number' ) {
                rocket = await rocketService.getById(rocket);
                if (!rocket){
                    return res.status(404).send(`Rocket with id ${req.body.rocket} not found`);
                }
            }
            const newLaunch = new Launch(
                req.body.launchCode,
                req.body.date,
                req.body.success,
                rocket,
                crew,
            );
            const obj = await launchService.create(newLaunch);
            return res.json(obj);
        } catch (err) {
            return res.status(500).send(`${err}`);
        }
    }
}