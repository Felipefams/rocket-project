import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Launch from "./Launch";

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