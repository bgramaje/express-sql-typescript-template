import * as dotenv from "dotenv";
import { Model, Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(`${process.env.POSTGRES_URI!}/${process.env.DB_NAME!}`) // Example for postgres

type Constructor<T> = new (...args: any[]) => T;
type ModelType<T extends Model<T>> = Constructor<T> & typeof Model;

export {sequelize , ModelType};