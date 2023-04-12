import express from 'express';

export const getAllCrewmen = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os Crewmans!");
    //chama o service
}

export const createNewCrewman = (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os Crewmans!");
    //chama o service
}

export const getCrewman = (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do Crewman ${req.params.id}`);
    //chama o service
}

export const updateCrewman = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o Crewman ${req.params.id}`);
    //chama o service
}

export const deleteCrewman = (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o Crewman ${req.params.id}`);
    //chama o service de delete
}