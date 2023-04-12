import express from 'express';

export const getAllCrews = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os crews!");
    //chama o service
}

export const createNewCrew = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os crews!");
    //chama o service
}

export const getCrew = (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do crew ${req.params.id}`);
    //chama o service
}

export const updateCrew = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o crew ${req.params.id}`);
    //chama o service
}

export const deleteCrew = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o crew ${req.params.id}`);
    //chama o service de delete
}