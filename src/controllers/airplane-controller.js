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

async function updateAirplane(req, res){
    try {
    //checking if req.body has any of the fields to update
        if(!req.body){
            ErrorResponse.message="Failed to update Airplane: updateAirplane";
            ErrorResponse.error="Model number or capacity is required to update the airplane";
            return res
                    .status(StatusCodes.BAD_REQUEST)
                    .json({
                        ErrorResponse
                    })
        }

        const modelNumber= req.body.modelNumber;
        const capacity= req.body.capacity;
        const id= req.params.id;
        const updateDetails={};
        if(modelNumber) updateDetails.modelNumber=modelNumber;
        if(capacity) updateDetails.capacity=capacity;

        const updatedAirplane = await AirplaneService.updateAirplane(id, updateDetails);
        SuccessResponse.message="Airplane updated successfully";
        SuccessResponse.data=updatedAirplane;

        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);

    } catch (error) {
        ErrorResponse.message="Internal server error occurred:updateAirplane";
        ErrorResponse.error=error;        

        return res
                .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)        
    }
    
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane,
}