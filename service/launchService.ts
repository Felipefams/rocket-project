import express, { response } from 'express';
import * as launchRepository from '../repository/launchRepository';

export const getAllLaunchs = async (req: express.Request, res: express.Response) => {
    return launchRepository.getAllLaunchs(req, res); 
}

export const createNewLaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.createNewLaunch(req, res); 
}

export const getLaunch = async (req: express.Request, res: express.Response) => { 
    return launchRepository.getLaunch(req, res);
}

export const updateLaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.updateLaunch(req, res); 
}

export const deleteLaunch = async (req: express.Request, res: express.Response) => {
    return launchRepository.deleteLaunch(req, res); 
}