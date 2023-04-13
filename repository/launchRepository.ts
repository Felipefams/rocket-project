import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';

export const getAllLaunchs = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.launch))
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body);
            })
    } catch (err) {
        console.error(err);
    }
}

export const createNewLaunch = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.launch), { method: "POST" })
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body + "requisicao para criar os Launchs!");
            })
    } catch (err) {
        console.error(err);
    }
}

export const getLaunch = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.launch, req.params.id), { method: "GET" })
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body);
            })
    } catch (err) {
        console.error(err);
    }
}

export const updateLaunch = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.launch, req.params.id), { method: "PUT" })
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body);
            })
    } catch (err) {
        console.error(err);
    }
}

export const deleteLaunch = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.launch, req.params.id), { method: "DELETE" })
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body);
            })
    } catch (err) {
        console.error(err);
    }
}