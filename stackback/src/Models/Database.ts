import mongoose from 'mongoose';
// conf = require('../setting/config');
var config = require('../../setting/config');

//Connextion avec mongo
export default async function connect() {
    try {
        await mongoose.connect(config.db.url, {
            useNewUrlParser: true,
            useFindAndModify: config.db.useFindAndModify
        })
        console.log(">>>> Database Connected");
    }
    catch (e) {
        console.log(e.toString())
    }
}
