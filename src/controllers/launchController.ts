import express, { response } from 'express';
import * as launchService from '../service/launchService';
import { RocketRepository } from '../repository/rocketRepository';
import { CrewRepository } from '../repository/crewRepository';
import Launch from '../model/Launch';

export const getAllLaunchs = async (req: express.Request, res: express.Response) => {
    try {
        const launchs = await launchService.getAllLaunchs();
        return res.json(launchs);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

export const createNewLaunch = async (req: express.Request, res: express.Response) => {
    try {
        const { launchCode, date, success } = req.body;
        const rockets = await RocketRepository.findOne({ where: { id: req.body.rocket } });
        const crew = await CrewRepository.findOne({ where: { id: req.body.crew } });

        const newLaunch = new Launch(launchCode, date, success, rockets, crew);
        const launch = await (launchService.createNewLaunch(newLaunch));
        return res.json(launch);
    } catch (err) {
        return res.status(500).send(`erro:${err}`);
    }
}

export const getLaunch = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const launch = await launchService.getLaunch(id);
        return res.json(launch);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

export const updateLaunch = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        const { launchCode, date, success } = req.body;
        const newRocket = await RocketRepository.getRocket(Number(req.body.rocket));
        const newCrew = await CrewRepository.getCrew(Number(req.body.crew));
    
        const newLaunch = new Launch(launchCode,date, success, newRocket, newCrew);
        return res.json(newLaunch);
    }catch(error){
        console.error(error);
        return res.status(500).send(error.message);
    }

}

export const deleteLaunch = async (req: express.Request, res: express.Response) => {
    try{
        const id = Number(req.params.id);
        const launch = await launchService.deleteLaunch(id);
        return res.json(launch);
    }catch(error){
        console.error(error);
        return res.status(500).send(error.message);
    }
}