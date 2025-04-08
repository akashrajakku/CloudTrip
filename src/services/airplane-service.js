const { StatusCodes } = require('http-status-codes');
const {AirplaneRepo}=require('../repo');
const AppError = require('../utils/errors/app-error');

const airplaneRepo = new AirplaneRepo();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepo.create(data);
        return airplane;
    } catch (error) {
        console.log(error);
        
        if(error.name == 'TypeError'){
            throw new AppError("Cannot create a new AIrplane object", StatusCodes.INTERNAL_SERVER_ERROR)
        }
        throw error;
    }
}

module.exports={
    createAirplane
}