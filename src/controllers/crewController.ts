import express, { response } from 'express';
import * as crewService from '../service/crewService';
// import dotenv from "dotenv";


export const getAllCrews = async (req: express.Request, res: express.Response) => {
    return crewService.getAllCrews(req, res); 
}

export const createNewCrew = async (req: express.Request, res: express.Response) => {
    return crewService.createNewCrew(req, res); 
}

export const getCrew = async (req: express.Request, res: express.Response) => { 
    return crewService.getCrew(req, res); 
}

export const updateCrew = async (req: express.Request, res: express.Response) => {
    return crewService.updateCrew(req, res); 
}

export const deleteCrew = async (req: express.Request, res: express.Response) => {
    return crewService.deleteCrew(req, res); 
}