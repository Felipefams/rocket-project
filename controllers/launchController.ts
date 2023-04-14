import express, { response } from 'express';
import * as launchService from '../service/launchService';

export const getAllLaunchs = async (req: express.Request, res: express.Response) => {
    return launchService.getAllLaunchs(req, res); 
}

export const createNewLaunch = async (req: express.Request, res: express.Response) => {
    return launchService.createNewLaunch(req, res); 
}

export const getLaunch = async (req: express.Request, res: express.Response) => { 
    return launchService.getLaunch(req, res); 
}

export const updateLaunch = async (req: express.Request, res: express.Response) => {
    return launchService.updateLaunch(req, res); 
}

export const deleteLaunch = async (req: express.Request, res: express.Response) => {
    return launchService.deleteLaunch(req, res); 
}