import express, { response } from 'express';
import * as rocketService from '../service/rocketService';

export const getAllRockets = async (req: express.Request, res: express.Response) => {
    return rocketService.getAllRockets(req, res); 
}

export const createNewRocket = async (req: express.Request, res: express.Response) => {
    return rocketService.createNewRocket(req, res); 
}

export const getRocket = async (req: express.Request, res: express.Response) => { 
    return rocketService.getRocket(req, res); 
}

export const updateRocket = async (req: express.Request, res: express.Response) => {
    return rocketService.updateRocket(req, res); 
}

export const deleteRocket = async (req: express.Request, res: express.Response) => {
    return rocketService.deleteRocket(req, res); 
}