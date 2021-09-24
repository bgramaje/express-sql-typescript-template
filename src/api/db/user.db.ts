import { Model } from "sequelize/types";
import User from "../../config/db/models/user.model";
import DB from "./db";

export class userDB extends DB<Model> {
    protected model: typeof User;

    constructor() {
        super()
        this.model = User;
    }
}