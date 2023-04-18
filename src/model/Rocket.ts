import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("rocket")
class Rocket{
    @PrimaryGeneratedColumn()
    id : number; 

    @Column()
    name : string;
    constructor(name : string, id : number){
        this.name = name;
        this.id = id;
    }
}

export default Rocket;