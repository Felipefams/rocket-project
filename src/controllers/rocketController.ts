import express, { response } from 'express';
import * as RocketService from '../service/rocketService';
import Rocket from '../model/Rocket';

export const getAllRockets = async (req: express.Request, res: express.Response) => {
    try {
        const rocket = await RocketService.getAllRockets();
        return res.json(rocket);
    } catch (err) {
        return res.status(500).send(`Error in getting rockets ${err}`);
    };
}

export const createNewRocket = async (req: express.Request, res: express.Response) => {
    try {
        const newRocket = new Rocket(req.body.name);
        const rocket = await RocketService.createNewRocket(newRocket);
        return res.json(rocket);
    } catch (err) {
        return res.status(500).send(`Error in creating rockets ${err}`);
    }; 
}

export const getRocket = async (req: express.Request, res: express.Response) => { 
    try {
        const id = Number(req.params.id);
        const rocket = await RocketService.getRocket(id);
        return res.json(rocket);
    } catch (err) {
        return res.status(500).send(`Error in getting rockets ${err}`);
    };
}

export const updateRocket = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        if(id){
            const rocket = RocketService.updateRocket(id, req.body);
            return res.json(rocket);
        }
        else    
            return res.status(500).send('id does not exist');
    } catch (err) {
        return res.status(500).send(`Error in updating rockets ${err}`);
    };
}

export const deleteRocket = async (req: express.Request, res: express.Response) => {
    try {
        const id = Number(req.params.id);
        if(id){
            const rocket = RocketService.deleteRocket(id);
            return res.json(rocket);
        }
        else    
            return res.status(500).send('id does not exist');
        
    } catch (err) {
        return res.status(500).send(`Error in deleting rockets ${err}`);
    }; 
}