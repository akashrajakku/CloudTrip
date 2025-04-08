const { logger } = require("../config");

class CrudRepo {
    constructor(model){
        this.model=model;
    }

    async create(data){ // to create/insert any new data
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data){ //deletion
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch (error) {
            logger.error(`An error occurred in Crud-repo : destroy`)
            throw error;
        }
    }

    async get(data){ //The findByPk method obtains only a single entry from the table, using the provided primary key.
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            logger.error(`An error occurred in Crud-repo : get`)
            throw error;
        }
    }

    async getAll(){ // It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
        try {
            const response = await this.model.findByAll();
            return response;
        } catch (error) {
            logger.error(`An error occurred in Crud-repo : getAll`)
            throw error;
        }
    }

    async update(id, data){ 
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            logger.error(`An error occurred in Crud-repo : update`)
            throw error;
        }
    }
}

module.exports = CrudRepo;