import { Model } from "sequelize/types";

import User from "../../config/db/models/user.model";
import { userService } from "../services/user.services";
import Controller from "./controller";

export class userController extends Controller<Model>{

    constructor() {
        super();
        this.model = User;
        this.service = new userService();
    }
}