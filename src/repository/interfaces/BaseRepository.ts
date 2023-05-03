export interface BaseRepository<T>{
    getAll(): Promise<T[]>
    getById(id : number): Promise<T>
    create(t: Partial<T>): Promise<T>
    update(id: number, t: Partial<T>): Promise<T>
    deleteById(id: number): Promise<T>
}