const crudRepo = require('./crud-repo');
const {Airplane} = require('../models');

class AirplaneRepo extends crudRepo {
    constructor(){
        super(Airplane);
    }
}

module.exports= AirplaneRepo;