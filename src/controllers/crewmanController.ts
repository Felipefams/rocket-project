import express from 'express';
import { Crewman } from '../model/Crewman';
import { CrewmanService } from "../service/CrewmanService";

export class CrewmanController {
    private readonly CrewmanService = new CrewmanService();

    getAllCrewman = async (req: express.Request, res: express.Response) => {
        try {
            const crewman = await this.CrewmanService.getAllCrewman();
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error: ${err}`);
        };
    }

    createCrewman = async (req: express.Request, res: express.Response) => {
        try {
            const newCrewman = new Crewman(
                req.body.name,
                req.body.patent
            );
            const crewman = await this.CrewmanService.createCrewman(newCrewman);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error: ${err}`);
        };
    }

    getCrewmanById = async (req: express.Request, res: express.Response) => {
        try {
            const id = Number(req.params.id);
            const crewman = await this.CrewmanService.getCrewmanById(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(404).send(`Error: ${err}`);
        };
    }

    updateCrewman = async (req: express.Request, res: express.Response) => {
        try {
            const id = Number(req.params.id);
            const crewman = this.CrewmanService.updateCrewman(id, req.body);
            return res.json(crewman);
        } catch (err) {
            return res.status(500).send(`Error: ${err}`);
        };
    }


    deleteCrewmanById = async (req: express.Request, res: express.Response) => {
        try {
            const id = Number(req.params.id);
            const crewman = await this.CrewmanService.deleteCrewmanById(id);
            return res.json(crewman);
        } catch (err) {
            return res.status(404).send(`Error: ${err}`);
        };
    }
}