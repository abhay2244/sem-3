const express = require('express');
const mongoose = require('mongoose');
const Printer = require('./model/Printer');
const bodyParser = require('body-parser')
const cors = require('cors');
mongoose.connect('mongodb+srv://abhay:abhay@cluster0.qjl9og5.mongodb.net/collages?retryWrites=true&w=majority').then(()=>{
 
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());
    app.get('/printers',async (req,res)=>{
        const data = await Printer.find();
        res.send(data);

    });

    app.get('/printer/:id',async (req,res)=>{
        const data = await Printer.findOne({id:req.params.id});
        res.send(data);
    });

    app.post('/printer',async (req,res)=>{
        const pri = new Printer();
        pri.PrinterName = req.body.PrinterName;
        pri.PrinterModel = req.body.PrinterModel;
        pri.PrinterMaker = req.body.PrinterMaker;
        pri.PrinterImage = req.body.PrinterImage;
        pri.PrinterPrice = req.body.PrinterModel;
        pri.PrinterDescription = req.body.PrinterDescription;
        pri.id=req.body.id;
        const data = await pri.save();
        res.send(data);
    });

    app.put('/printer/:id',async (req,res)=>{
        const data = await Printer.findOne({id:req.params.id});
        data.PrinterName = req.body.PrinterName;
        data.PrinterModel = req.body.PrinterModel;
        data.PrinterMaker = req.body.PrinterMaker;
        data.PrinterImage = req.body.PrinterImage;
        data.PrinterPrice = req.body.PrinterModel;
        data.PrinterDescription = req.body.PrinterDescription;
        await data.save();
        res.send(data);
    });

    app.delete('/printer/:id',async (req,res)=>{
        const data = await Printer.deleteOne({id:req.params.id});
        res.send(data);
    });

    app.listen(3003,()=>{
        console.log("Server started at @ 3003");
    })
});


