import express, { response } from 'express';
import { Endpoints } from '../enums';
import { mountEndpoint, mountEndpointWithId } from '../utils/stringUtils';
import { DataSource, EntityRepository, Repository } from 'typeorm';
import Crew from '../model/Crew';
import AppDataSource from '../data-source';

export const CrewRepository = AppDataSource.getRepository(Crew).extend({
     
    async getAllCrews(req: express.Request, res: express.Response){
        return this.dataSource
        .getRepository(Crew)
        .find()
    } 
})

export const getAllCrews = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.crew))
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

export const createNewCrew = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpoint(Endpoints.crew), {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: req.body.name,
                crewCrewmanId: req.body.crewCrewmanId
            }
            )
        })
            .then(response => {
                return response.json()
            })
            .then(body => {
                res.status(200).send(body + "requisicao para criar os crews!");
            })
    } catch (err) {
        console.error(err);
    }
}

export const getCrew = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crew, req.params.id), { method: "GET" })
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

export const updateCrew = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crew, req.params.id), {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: req.body.name,
                crewCrewmanId: req.body.crewCrewmanId
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

export const deleteCrew = async (req: express.Request, res: express.Response) => {
    try {
        return fetch(mountEndpointWithId(Endpoints.crew, req.params.id), { method: "DELETE" })
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