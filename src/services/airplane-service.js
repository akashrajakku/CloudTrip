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

module.exports={
    createAirplane,
    getAirplanes,
}