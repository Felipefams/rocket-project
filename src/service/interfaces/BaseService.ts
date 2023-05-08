import { DeepPartial } from "typeorm";
import { BaseRepository, IBaseRepository } from "../../repository/interfaces/BaseRepository";

export interface IBaseService<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T>;
    deleteById(id: number): Promise<T>;
    create(obj: DeepPartial<T>): Promise<T>;
    update(id: number, obj: Partial<T>): Promise<T>;
}

export abstract class BaseService<T>{
    protected readonly repository: IBaseRepository<T>;

    constructor(repository: IBaseRepository<T>) {
        this.repository = repository;
    }

    async getAll(): Promise<T[]> {
        return this.repository.getAll();
    }

    async getById(id: number): Promise<T> {
        return this.repository.getById(id);
    }

    async deleteById(id: number): Promise<T> {
        return this.repository.deleteById(id);
    }

    async create(obj: DeepPartial<T>): Promise<T> {
        return this.repository.create(obj);
    } 

    async update(id: number, obj: Partial<T>): Promise<T> {
        return this.repository.update(id, obj);
    }
}