
const info = (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "welcome akash raj to the wonderful world",
        error: {},
        data: {}
    })
};


module.exports={
    info: info
}