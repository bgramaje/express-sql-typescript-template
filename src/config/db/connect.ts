import * as dotenv from "dotenv";

import { sequelize } from "./sequilize.config";
import Logger from "../utils/logger.utils";

dotenv.config();

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        Logger.info(`Successfully connected to DDBB: ${process.env.POSTGRES_URI!}/${process.env.DB_NAME!} `);
        await sequelize.sync({ force: true });
        Logger.info("All models were synchronized successfully.");
    } catch (err) {
        Logger.error('Failed to connect to DDBB: ', err);
    }
};