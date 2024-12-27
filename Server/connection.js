import mongoose from "mongoose";
// const mongoose = require("mongoose");

export const ConnectMongoose = async () => {
    mongoose.connect(process.env.MONGO_ATLAS_PW).then(() => {
        console.log("Mongoose connected.");
    }).catch(() => {
        console.log("Enable to connect Mongoose.")
    })
    mongoose.Promise = global.Promise;
};