import express from 'express';

export const getAllCrewmen = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao de todos os Crewmans!");
    //chama o service
}

export const createNewCrewman = async (req: express.Request, res: express.Response) => {
    res.status(200).send("requisicao para criar os Crewmans!");
    //chama o service
}

export const getCrewman = async (req: express.Request, res: express.Response) => { 
    res.status(200).send(`requisicao do Crewman ${req.params.id}`);
    //chama o service
}

export const updateCrewman = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para alterar o Crewman ${req.params.id}`);
    //chama o service
}

export const deleteCrewman = async (req: express.Request, res: express.Response) => {
    res.status(200).send(`requisicao para deletar o Crewman ${req.params.id}`);
    //chama o service de delete
}