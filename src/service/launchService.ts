import Launch from "../model/Launch";
import { LaunchRepository } from "../repository/LaunchRepository";
import { BaseService } from "./interfaces/BaseService";

export class LaunchService extends BaseService<Launch>{
    protected readonly repository = new LaunchRepository(); 
}