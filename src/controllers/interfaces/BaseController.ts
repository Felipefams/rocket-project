import { Request, Response } from "express";
import { BaseService, IBaseService } from "../../service/interfaces/BaseService";

export abstract class BaseController<T>{
    protected readonly service: IBaseService<T>;

    constructor(service: IBaseService<T>) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const obj = await this.service.getAll();
            return res.json(obj);
        } catch (err) {
            return res.status(500).send(`${err}`);
        }
    }

    getById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const obj = await this.service.getById(id);
            return res.json(obj);
        } catch (err) {
            return res.status(404).send(`${err}`);
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const obj = await this.service.create(req.body);
            return res.json(obj);
        } catch (err) {
            return res.status(500).send(`${err}`);
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const obj = await this.service.update(id, req.body);
            return res.json(obj);
        } catch (err) {
            return res.status(500).send(`${err}`);
        }
    }

    deleteById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            const obj = await this.service.deleteById(id);
            return res.json(obj);
        } catch (err) {
            return res.status(404).send(`${err}`);
        }
    }
}