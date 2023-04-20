import express, { response } from 'express';
import * as crewService from '../service/crewService';
import Crew from '../model/Crew';

export const getAllCrews = async (req: express.Request, res: express.Response) => {
    try {
        const crews = await crewService.getAllCrews();
        return res.json(crews);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }

}

export const createNewCrew = async (req: express.Request, res: express.Response) => {
    try {
        const newCrew = new Crew(req.body.name, req.body.crewman)
        const crew = await crewService.createNewCrew(newCrew)
        return res.json(crew);
    }
    catch (error) {
        console.error(error)
        return res.status(500).send(error.message);
    }
}

export const getCrew = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const crew = await crewService.getCrew({id});
        return res.json(crew)
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }

}

export const updateCrew = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const name = req.body.name;
        const crew = await crewService.updateCrew({ id, name })
        return res.json(crew);
    }
    catch(error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

export const deleteCrew = async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);
        const crew = await crewService.deleteCrew({id});
        return res.json(crew);
    }
    catch(error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}