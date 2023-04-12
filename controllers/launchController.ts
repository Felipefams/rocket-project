import express from 'express';

export const getAllLaunchs = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os launches!");
    //chama o service
}

export const createNewLaunch = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os launches!");
    //chama o service
}

export const getLaunch = async (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do launch ${req.params.id}`);
    //chama o service
}

export const updateLaunch = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o launch ${req.params.id}`);
    //chama o service
}

export const deleteLaunch = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o launch ${req.params.id}`);
    //chama o service de delete
}