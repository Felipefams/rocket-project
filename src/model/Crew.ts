import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("crew")
class Crew{
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string; 
    // private crewCrewmanId: number;

    @CreateDateColumn()
    public created_at: Date | undefined;

    constructor(name: string, id: number, crewCrewmanId: number){
        this.name = name;
        this.id = id;
        // this.crewCrewmanId = crewCrewmanId;
    }
}
export default Crew;