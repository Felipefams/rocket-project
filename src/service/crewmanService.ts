import express, { response } from 'express';
import * as crewmanRepository from '../repository/crewmanRepository';


export const getAllCrewmen = async (req: express.Request, res: express.Response) => {
    return crewmanRepository.getAllCrewmen(req, res); 
}

export const createNewCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanRepository.createNewCrewman(req, res); 
}

export const getCrewman = async (req: express.Request, res: express.Response) => { 
    return crewmanRepository.getCrewman(req, res);
}

export const updateCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanRepository.updateCrewman(req, res); 
}

export const deleteCrewman = async (req: express.Request, res: express.Response) => {
    return crewmanRepository.deleteCrewman(req, res); 
}