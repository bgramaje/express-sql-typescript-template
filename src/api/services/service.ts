import { Model } from "sequelize/types";

import DB from "../db/db";
import { ModelType } from "../../config/db/sequilize.config";

export default abstract class Service<T extends Model> {
    protected db!: DB<T>;
    protected model!: ModelType<T>;

    /**
     * Service Layer
     * @function get(), gets all data from DDBB(entitiy?)
     * @returns Promise<Document<T>[] | undefined>
     */
    async get(): Promise<Model[]> {
        try {
            const result = await this.db.get();
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Service Layer
     * @function getById(), gets an specific entity from DDBB(entity?) by it's Id.
     * @param id id 
     * @returns Promise<Document<T> | undefined | null>
     */
    async getById(id: String): Promise<Model | null> {
        try {
            const result = await this.db.getById(id);
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Service Layer
     * @function add(), adds a new data to DDBB(entity?)
     * @param newEntity entity to be saved into DDBB
     * @returns Promise<Document<T> | undefined
     */
    async add(entity: typeof this.model): Promise<Model> {
        try {
            const result = await this.db.add(entity);
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Service Layer
     * @function delete(), deletes data from DDBB(entity?)
     * @param id id of the entity to be removed
     * @returns Promise<Document<T> | undefined | null>
     */
    async delete(id: String): Promise<Number | null> {
        try {
            const result = await this.db.delete(id);
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Service Layer
     * @function update(), updates data from DDBB(entity?)
     * @param id id of the entity to be updated
     * @param updateQuery query to apply to the entity to be updated
     * @returns Promise<any>
     */
    async update(id: String, updateQuery: {}): Promise<any> {
        try {
            const result = await this.db.update(id, updateQuery);
            return result;
        } catch (error: any) {
            throw error;
        }
    }
}