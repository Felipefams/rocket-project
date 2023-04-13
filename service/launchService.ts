import express, { response } from 'express';
import * as launchRepository from '../repository/launchRepository';

export const getAlllaunchs = async (req: express.Request, res: express.Response) => {
    return launchRepository.getAllLaunchs(req, res); 
}

export const createNewlaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.createNewLaunch(req, res); 
}

export const getlaunch = async (req: express.Request, res: express.Response) => { 
    return launchRepository.getLaunch(req, res);
}

export const updatelaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.updateLaunch(req, res); 
}

export const deletelaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.deleteLaunch(req, res); 
}