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
        
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(err => {
                explanation.push(err.message);
            });
            console.log(explanation);
            
            throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError("Cannot create a new AIrplane object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//getAirplane will return all airplanes present

async function getAirplanes(){
    try {
        const allAirplanes = await airplaneRepo.getAll();
        return allAirplanes;
    } catch (error) {
        console.log(`error from services ${error}`);
        throw new AppError("Cannot fetch Airplanes at this moment", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

//getAirplane => given the airplane's id return that particular airplane

async function getAirplane(id){
    try {
        const airplane = await airplaneRepo.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("Airplane not found", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Can not fetch airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id){
    try {
        const airplane = await airplaneRepo.destroy(id);
        return airplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("Airplane not found to delete", StatusCodes.NOT_FOUND);
        }
        throw new AppError("Can not destroy airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data){
    try {
        await airplaneRepo.get(id);

        const updatedAirplane = await airplaneRepo.update(id, data);
        return updatedAirplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("Airplane not found to update", StatusCodes.NOT_FOUND);
        }
        
        throw new AppError("Can not update airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
}