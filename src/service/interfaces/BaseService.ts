import { DeepPartial } from "typeorm";
import { IBaseRepository } from "../../repository/interfaces/BaseRepository";

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
        if (!id) throw new Error("id is required");
        return this.repository.getById(id);
    }

    async deleteById(id: number): Promise<T> {
        if (!id) throw new Error("id is required");
        return this.repository.deleteById(id);
    }

    async create(obj: DeepPartial<T> | T): Promise<T> {
        return this.repository.create(obj);
    }

    async update(id: number, obj: Partial<T>): Promise<T> {
        if (!id) throw new Error("id is required");
        if (!obj) throw new Error("obj is required");
        return this.repository.update(id, obj);
    }
}