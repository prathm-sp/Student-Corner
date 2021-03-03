const { Schema, model } = require("mongoose");

const classapplication = new Schema({

    classid:{
        type: Schema.Types.ObjectId,
        ref: "Class"
    },
    applicantid:{
        type: Schema.Types.ObjectId,
        ref: "Applicant"
    },
    recruiterid:{
        type: Schema.Types.ObjectId,
        ref: "Recruiter"
    },
    status:{
        type:String,
        enum:["Applied","Confirmed","Rejected"],
        default:"Applied"
    }
});

module.exports = model('Classapplication',classapplication);