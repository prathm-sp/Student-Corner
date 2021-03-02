const express = require('express');
const app = express.Router();
const {verifyaccesstoken} = require("./../helpers/jwt.helpers")
const {upload} =require('./../helpers/multer'); 
const {configcloud,uploadtocloud} = require('./../helpers/cloudinary');
const Class = require("./../models/class.model")
//all the classes 
app.get('/all',verifyaccesstoken,async(req,res,next) => {
    try {
        const allclasses = await Class.find();
        res.status(200).send({classes: allclasses});
    } catch (error) {
        next(error);
    }
    
});
//get all programming class
app.get('/category/:name',verifyaccesstoken,async(req,res,next)=>{
        try {
            const getbyactivity = await Class.find({activites:req.params.name});
            res.status(200).send(getbyactivity);
        }catch (error) {
            next(error);
        }

})
//getting a specific class  
app.get('/:id',verifyaccesstoken,async(req,res,next)=>{
try {
    const specificclass = await Class.findById(req.params.id);
    if(!specificclass) res.status(400).send("enter valid id");
     
    //res.status(200).send({class:specificclass,subscribed:});

    
} catch (error) {
    next(error);
}

});
//getting all the class that the recruiter has made
app.get('/my',verifyaccesstoken,async(req,res,next)=>{
    try {
        const myclasses = await Class.find({classowner:req.payload.id});
        res.status(200).send({my:myclasses});
        
    } catch (error) {
        next(error)
    }
});

// creating a class
app.post('/',verifyaccesstoken,upload.single('image'),configcloud,async(req,res,next)=>{
    try {
        const{classname,category,address,city,fees,duration,vacancy} = req.body;
        console.log(req.payload);
        req.body.classowner = req.payload.id;
        console.log(req.body);
        if(!classname||!category||!address||!city||!fees||!duration||!vacancy)
        throw new Error("enter all the details");
        
        if(!req.file)
        throw new Error("enter the photo to");
        const path = req.file.path
        const resulturl = await uploadtocloud(path);
        req.body.image = resulturl.url;

        const clas = new Class(req.body);

        await clas.save();

        //console.log(req.body)
        // req.body.image = resulturl.url;
        res.status(201).send({image:resulturl.url,clas:clas})
        
    } catch (error) {
        next(error)
    }
        
});

//deleting a class by id
app.delete('/:id',verifyaccesstoken,async(req,res,next)=>{

    try {
        
        const del = await Class.findByIdAndDelete(req.params.id)
        res.send(del);
    } catch (error) {
        next(error)
    }
})




module.exports = app;