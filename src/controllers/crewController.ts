import express, { response } from 'express';
import * as crewService from '../service/crewService';
import Crew from '../model/Crew';
import { CrewmanRepository } from '../repository/CrewmanRepository';
import { In } from 'typeorm';

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
        const name = req.body.name;
        const crewman = await CrewmanRepository.findBy({id: In(req.body.crewman)});
        const newCrew = new Crew(name, crewman)

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
        const crew = await crewService.getCrew(id);
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
        const crewmans = await CrewmanRepository.findBy({id: In(req.body.crewman)});
        const updateCrew = new Crew(name, crewmans);
        
        const crew = await crewService.updateCrew(id, updateCrew)
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