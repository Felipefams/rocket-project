import express, { response } from 'express';
import * as rocketRepository from '../repository/rocketRepository';

export const getAllRockets = async (req: express.Request, res: express.Response) => {
    return rocketRepository.getAllRockets(req, res); 
}

export const createNewRocket = async (req: express.Request, res: express.Response) => {
    return rocketRepository.createNewRocket(req, res); 
}

export const getRocket = async (req: express.Request, res: express.Response) => { 
    return rocketRepository.getRocket(req, res);
}

export const updateRocket = async (req: express.Request, res: express.Response) => {
    return rocketRepository.updateRocket(req, res); 
}

export const deleteRocket = async (req: express.Request, res: express.Response) => {
    return rocketRepository.deleteRocket(req, res); 
}