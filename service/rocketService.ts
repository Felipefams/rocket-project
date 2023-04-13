import express from 'express';

export const getAllRockets = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os foguetes!");
    //chama o service
}

export const createNewRocket = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os foguetes!");
    //chama o service
}

export const getRocket = async (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do foguete ${req.params.id}`);
    //chama o service
}

export const updateRocket = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o foguete ${req.params.id}`);
    //chama o service
}

export const deleteRocket = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o foguete ${req.params.id}`);
    //chama o service de delete
}