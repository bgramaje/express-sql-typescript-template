import { Model } from "sequelize/types";
import User from "../../config/db/models/user.model";

import { userDB } from "../db/user.db";
import Service from "./service";

export class userService extends Service<Model> {

    constructor() {
        super()
        this.model = User
        this.db = new userDB();
    }
}