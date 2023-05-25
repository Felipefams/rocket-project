import { Request, Response } from "express";
import Crew from "../model/Crew";
import { BaseController } from "./interfaces/BaseController";
import { CrewmanController } from "./CrewmanController";
import { crewService, crewmanController, crewmanService } from "../controllerFactory";

export class CrewController extends BaseController<Crew>{
    override create = async (req: Request, res: Response) => {
        try {
            let crewman = req.body.crewman;
            if (typeof crewman[0] === 'number' ) {
                const replaceCrewman = [];  
                for (let i = 0; i < req.body.crewman.length; i++) {
                    const tmpCrewman = await crewmanService.getById(req.body.crewman[i]);
                    if (!tmpCrewman) {
                        return res.status(404).send(`Crewman with id ${req.body.crewman[i]} not found`);
                    }
                    replaceCrewman.push(tmpCrewman);
                }
                crewman = replaceCrewman;
            }
            const newCrew = new Crew(req.body.name, crewman);
            const obj = await crewService.create(newCrew);
            return res.json(obj);
        } catch (err) {
            return res.status(500).send(`${err}`);
        }
    }
}