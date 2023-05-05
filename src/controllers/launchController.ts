import Launch from "../model/Launch";
import { LaunchService } from "../service/LaunchService";
import { BaseController } from "./interfaces/BaseController";

export class LaunchController extends BaseController<Launch>{
    private readonly LaunchService = new LaunchService();
}