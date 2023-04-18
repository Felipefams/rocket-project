import express, { response } from 'express';
import * as crewRepository from '../repository/crewRepository';

export const getAllCrews = async (req: express.Request, res: express.Response) => {
    return crewRepository.getAllCrews(req, res); 
}

export const createNewCrew = async (req: express.Request, res: express.Response) => {
    return crewRepository.createNewCrew(req, res); 
}

export const getCrew = async (req: express.Request, res: express.Response) => { 
    return crewRepository.getCrew(req, res);
}

export const updateCrew = async (req: express.Request, res: express.Response) => {
    return crewRepository.updateCrew(req, res); 
}

export const deleteCrew = async (req: express.Request, res: express.Response) => {
    return crewRepository.deleteCrew(req, res); 
}