import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';

export const getAllCrewmen = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.crewman))
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

export const createNewCrewman = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.crewman), {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: req.body.name,
                patent: req.body.patent
            }
            )
        })

            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body + "requisicao para criar os Crewmans!");
            })
    } catch (err) {
        console.error(err);
    }
}

export const getCrewman = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crewman, req.params.id), { method: "GET" })
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

export const updateCrewman = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crewman, req.params.id), {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: req.body.name,
                patent: req.body.patent
            }
            )
        })
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

export const deleteCrewman = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crewman, req.params.id), { method: "DELETE" })
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