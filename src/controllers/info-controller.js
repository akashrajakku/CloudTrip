const {StatusCodes}= require('http-status-codes');


const info = (req, res)=>{
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "hi akash raj to the wonderful world of narnia",
        error: {},
        data: {}
    })
};


module.exports={
    info: info
}