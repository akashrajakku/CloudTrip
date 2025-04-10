const {StatusCodes}= require('http-status-codes');
const {AirplaneService}= require('../services');
const{ErrorResponse, SuccessResponse}=require('../utils/common');

async function createAirplane(req, res){
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });

        SuccessResponse.message="Airplane created successfully";
        SuccessResponse.data=airplane;
        
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);

    } catch (error) {

        ErrorResponse.message="Internal server error occurred:createAirplane";
        ErrorResponse.error=error;        

        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function getAirplanes(req, res){
    try {
        const id = req.params.id;
        const airplanes = await AirplaneService.getAirplanes(id);

        SuccessResponse.message="Airplanes fetched successfully";
        SuccessResponse.data=airplanes;
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    } catch (error) {

        ErrorResponse.message="Internal server error occurred:getAirplanes";
        ErrorResponse.error=error;        

        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function getAirplane(req, res){
    try {
        const id= req.params.id
        const airplane = await AirplaneService.getAirplane(id);

        SuccessResponse.message="Airplanes fetched successfully";
        SuccessResponse.data=airplane;
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    } catch (error) {

        ErrorResponse.message="Internal server error occurred:getAirplane";
        ErrorResponse.error=error;        

        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function destroyAirplane(req, res){
    try {
        const id= req.params.id
        const airplane = await AirplaneService.destroyAirplane(id);

        SuccessResponse.message="Airplanes destroyed successfully";
        SuccessResponse.data=airplane;
        
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    } catch (error) {

        ErrorResponse.message="Internal server error occurred:destroyAirplane";
        ErrorResponse.error=error;        

        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
}