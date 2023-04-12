import express from 'express';

export const getAllLaunchs = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os launches!");
    //chama o service
}

export const createNewLaunch = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os launches!");
    //chama o service
}

export const getLaunch = (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do launch ${req.params.id}`);
    //chama o service
}

export const updateLaunch = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o launch ${req.params.id}`);
    //chama o service
}

export const deleteLaunch = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o launch ${req.params.id}`);
    //chama o service de delete
}