const mongoose = require("mongoose");
const connection = "mongodb://mongo:27018/mongo-test";
const connectDb = () => {
 return mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true });
};
module.exports = connectDb;