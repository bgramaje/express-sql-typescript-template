import { UpdateResult } from 'mongodb';
import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

import { ModelType } from "../../config/db/sequilize.config";

export default abstract class DB<T extends Model> {
    protected abstract model: ModelType<T>;

    /**
     * Data Access Layer
     * @function get(), gets all models from a document MongoDB
     * @returns Promise<Document<T>[] | undefined>
     */
    async get(): Promise<Model[]> {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Data Access Layer
     * @function getById(), gets an specific model from a document by it's Id.
     * @param id id of the model 
     * @returns Promise<Document<T> | undefined | null>
     */
    async getById(id: String): Promise<Model<T> | null> {
        try {
            const result = await this.model.findOne({ where: { id: id } })
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Data Access Layer
     * @function add(), adds a new model to a document of MongoDB
     * @param newEntity entity to be saved into DDBB
     * @returns Promise<Document<T> | undefined
     */
    async add(newEntity: typeof Model): Promise<Model<T>> {
        try {
            const entity = await this.model.create(newEntity);
            return entity;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Data Access Layer
     * @function delete(), deletes a model from a document of MongoDB 
     * @param id id of the model 
     * @returns Promise<Document<T> | undefined | null>
     */
    async delete(id: String): Promise<Number | null> {
        try {
            const result = await this.model.destroy({ where: { id: id } })
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * Data Access Layer
     * @function update(), updates a model from a document of MongoDB 
     * @param id id of the model 
     * @param updateQuery query to apply to the model to be updated
     * @returns Promise<UpdateResult | undefined>
     */
    async update(id: String, updateQuery: {}): Promise<any[]> {
        try {
            const result = await this.model.update(updateQuery, { where: { id: id } });
            return result;
        } catch (error: any) {
            throw error;
        }
    }
}