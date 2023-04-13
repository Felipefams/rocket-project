import express, { response } from 'express';
import * as launchService from '../service/launchService';
// import dotenv from "dotenv";


export const getAlllaunchs = async (req: express.Request, res: express.Response) => {
    return launchService.getAllLaunchs(req, res); 
}

export const createNewlaunch = async (req: express.Request, res: express.Response) => {
    return launchService.createNewLaunch(req, res); 
}

export const getlaunch = async (req: express.Request, res: express.Response) => { 
    return launchService.getLaunch(req, res); 
}

export const updatelaunch = async (req: express.Request, res: express.Response) => {
    return launchService.updateLaunch(req, res); 
}

export const deletelaunch = async (req: express.Request, res: express.Response) => {
    return launchService.deleteLaunch(req, res); 
}