import { DeepPartial, Entity, FindOptions, Repository } from "typeorm"

export interface IBaseRepository<T> {
    getAll(): Promise<T[]>
    getById(id: number): Promise<T>
    create(t: DeepPartial<T>): Promise<T>
    update(id: number, t: Partial<T>): Promise<T>
    deleteById(id: number): Promise<T>
}


export abstract class BaseRepository<T> implements IBaseRepository<T>{
    protected repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this.repository = repository;
    }

    async getAll(): Promise<T[]> {
        return await this.repository.find();
    }

    async getById(id: number): Promise<T> {
        const obj = await this.repository.findOneBy({id} as any);
        if(!obj) throw new Error(`${id} does not exist`)
        return obj;
    }

    async deleteById(id: number): Promise<T>{
        const obj = this.getById(id);
        await this.repository.delete(id);
        return obj;
    }

    async create(obj: DeepPartial<T>): Promise<T>{
        const newObj = this.repository.create(obj);
        await this.repository.save(newObj);
        return newObj;
    }

    async update(id: number, obj: Partial<T>): Promise<T> {
        const tmpObj = await this.getById(id);
        if(!tmpObj) throw new Error(`${id} does not exist`)
        const updatedObj = Object.assign(tmpObj, obj);
        await this.repository.save(updatedObj);
        return updatedObj;    
   }
}