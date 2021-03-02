const { Schema, model } = require("mongoose");

const classapplication = new Schema({

    classid:{
        type: Schema.Types.ObjectId,
        ref: "Class",
    },
    
})