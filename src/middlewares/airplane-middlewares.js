const{StatusCodes} = require('http-status-codes');

function validateCreateRequest(req, res, next){
    if(!req.body.modelNumber){
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json({
                    success: false,
                    message: "Error occurred while creating airplane",
                    data: {},
                    error: {explanation: "Model number not found in the oncoming request"}
                });
    }
    next();
}

module.exports={validateCreateRequest};