import { Request, Response, NextFunction } from "express";
import { Model } from "sequelize/types";

import Logger from "../../config/utils/logger.utils";
import Service from '../services/service';
import { ModelType } from "../../config/db/sequilize.config";

export default abstract class Controller<T extends Model> {
    protected service!: Service<T>;
    protected model!: ModelType<T>;

    /**
     * Controller Layer
     * @function get(), gets all data from DDBB(entitiy?) and sends a result.
     * @param req Request 
     * @param res Response
     * @param next NextFunction
     */
    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.service.get()
            result ? res.status(200).send(result) : res.status(500).send("Could not retrive information from DDBB");
        } catch (error: any) {
            Logger.error(error);
            next(error)
        }
    }

    /**
     * Controller Layer
     * @function getById(), gets entity from DDBB(entitiy?) by it's Id, and sends a result.
     * @param req Request 
     * @param res Response
     * @param next NextFunction
     */
    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.service.getById(req?.params?.id)
            result ? res.status(200).send(result) : res.status(500).send("Could not found entity with provided id");
        } catch (error: any) {
            Logger.error(error);
            next(error)
        }
    }

    /**
     * Controller Layer
     * @function add(), adds entity into DDBB(entitiy?), and sends a result
     * @param req Request 
     * @param res Response
     * @param next NextFunction
     */
    async add(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const newEntity = req.body as typeof this.model;
            const result = await this.service.add(newEntity)
            result ? res.status(201).send(result) : res.status(500).send("Could not create entity");
        } catch (error: any) {
            Logger.error(error);
            next(error)
        }
    }

    /**
     * Controller Layer
     * @function delete(), deletes entity from DDBB(entitiy?), and sends a result.
     * @param req Request 
     * @param res Response
     * @param next NextFunction
     */
    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.service.delete(req?.params?.id);
            result ? res.status(202).send(result) : res.status(500).send("Could not delete sample object");
        } catch (error: any) {
            Logger.error(error);
            next(error)
        }
    }

    /**
     * Controller Layer
     * @function update(), updates entity from DDBB(entitiy?), and sends a result.
     * @param req Request 
     * @param res Response
     * @param next NextFunction
     */
    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const editSample = req.body as typeof Model;
            const query = { $set: editSample }
            const found = await this.service.getById(req?.params?.id);

            if (!found) res.status(404).send(`Entity with id ${req?.params?.id} does not exist`);

            const result = await this.service.update(req?.params?.id, query)
            result ? res.status(202).send(result) : res.status(400).send("Could not update sample object");

        } catch (error: any) {
            Logger.error(error);
            next(error)
        }
    }
}