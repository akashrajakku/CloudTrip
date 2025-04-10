const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");

class CrudRepo {
    constructor(model){
        this.model=model;
    }

    async create(data){ // to create/insert any new data
        const response = await this.model.create(data);
        return response;
    }

    async destroy(data){ //deletion
        const response = await this.model.destroy({
                where: {
                    id: data
                }
        });

        return response;

    }

    async get(data){ //The findByPk method obtains only a single entry from the table, using the provided primary key.
        
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
            }
            return response;
        
    }

    async getAll(){ // It generates a standard SELECT query which will retrieve all entries from the table (unless restricted by something like a where clause, for example).
       
            const response = await this.model.findAll();
            return response;
       
    }

    async update(id, data){ 
           
        const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        
    }
}

module.exports = CrudRepo;