import express from 'express';
import * as crewmanService from '../service/crewmanService';
import { Crewman } from '../model/Crewman';

export const getAllCrewmen = async (req: express.Request, res: express.Response) => {
    try {
        const crewman = await crewmanService.getAllCrewmen();
        return res.json(crewman);
    } catch (err) {
        return res.status(500).send(`Error: ${err}`);
    };
}

export const createNewCrewman = async (req: express.Request, res: express.Response) => {
    try {
        const newCrewman = new Crewman(
            req.body.name,
            req.body.patent
        );
        const crewman = await crewmanService.createNewCrewman(newCrewman);
        return res.json(crewman);
    } catch (err) {
        return res.status(500).send(`Error: ${err}`);
    };
}

export const getCrewman = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const crewman = await crewmanService.getCrewman(id);
        return res.json(crewman);
    } catch (err) {
        return res.status(404).send(`Error: ${err}`);
    };
}

export const updateCrewman = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const crewman = crewmanService.updateCrewman(id, req.body);
        return res.json(crewman);
    } catch (err) {
        return res.status(500).send(`Error: ${err}`);
    };
}

export const deleteCrewman = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const crewman = await crewmanService.deleteCrewman(id);
        return res.json(crewman);
    } catch (err) {
        return res.status(404).send(`Error: ${err}`);
    };
}