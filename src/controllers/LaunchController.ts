import Launch from "../model/Launch";
import { LaunchService } from "../service/LaunchService";
import { BaseController } from "./interfaces/BaseController";
import { launchService } from "../controllerFactory";

export class LaunchController extends BaseController<Launch>{
}