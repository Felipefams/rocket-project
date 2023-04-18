import express from 'express';
import * as crewmanService from '../service/crewmanService';

export const getAllCrewmen = async (req: express.Request, res: express.Response) => {
    return crewmanService.getAllCrewmen(req, res);
}

export const createNewCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanService.createNewCrewman(req, res);
}

export const getCrewman = async (req: express.Request, res: express.Response) => { 
    return crewmanService.getCrewman(req, res);
}

export const updateCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanService.updateCrewman(req, res);
}

export const deleteCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanService.deleteCrewman(req, res);
}