const mongoose = require('mongoose');
const { DB_DATABASE, DB_HOST, DB_PORT } = process.env;
class Database {
    constructor() {
        this._init();
    }
    _init() {
        mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(resolve => {
                console.log(`MongoDb connection successfull`);
            })
            .catch(err => console.log(`Database Connection failure ${err}`));
    }
}

module.exports = new Database();