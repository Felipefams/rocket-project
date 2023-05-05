import { DeepPartial } from "typeorm";
import { BaseRepository, IBaseRepository } from "../../repository/interfaces/BaseRepository";

export abstract class BaseService<T>{
    protected readonly repository: BaseRepository<T>;


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