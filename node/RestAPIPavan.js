const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Titanium = require('./model/Titanium');
const cors=require('cors')

mongoose.connect('mongodb+srv://abhay:abhay@cluster0.qjl9og5.mongodb.net/collages?retryWrites=true&w=majority').then(() => {
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());
    app.get('/titaniums',async (req,res) => {
       const data=await Titanium.find();  
       res.send(data);
    });
    app.get('/titanium/:id',async (req,res) => {
        const data= await Titanium.findOne({Tid:req.params.id});
        res.send(data);
    });
    app.delete('/titanium/:id',async (req,res) => {
        const data= await Titanium.deleteOne({Tid:req.params.id});
        res.send(data);
    });
    app.post('/student',async (req,res) =>{
    const tit=new Titanium();
    tit.Tid =req.body.Tid;
    tit.TName =req.body.TName;
    tit.TImage =req.body.TImage;
    tit.TDescription = req.body.TDescription;
    tit.Appearance =req.body.Appearance;
    tit.ASTM_D476_84 = req.body.ASTM_D476_84;
    tit.CASNO =req.body.CASNO;
    tit.ChemicalName =req.body.ChemicalName;
    tit.ColorIndex =req.body.ColorIndex;
    tit.EINECSNO =req.body.EINECSNO;
    tit.ISO591_1_2000 =req.body.ISO591_1_2000;
    tit.SpecificGravity =req.body.SpecificGravity;
    tit.SurfaceTreatment =req.body.SurfaceTreatment;
    tit.UsageOfChemical=req.body.UsageOfChemical;
    tit.Item=req.body.Item;
    const data=tit.save();
    res.send(data);
    });
    app.put('/student/:id',async (req,res) => {
    const data=await Titanium.findOne({Tid:req.params.id});
    tit.TName =req.body.TName;
    tit.TImage =req.body.TImage;
    tit.TDescription = req.body.TDescription;
    tit.Appearance =req.body.Appearance;
    tit.ASTM_D476_84 = req.body.ASTM_D476_84;
    tit.CASNO =req.body.CASNO;
    tit.ChemicalName =req.body.ChemicalName;
    tit.ColorIndex =req.body.ColorIndex;
    tit.EINECSNO =req.body.EINECSNO;
    tit.ISO591_1_2000 =req.body.ISO591_1_2000;
    tit.SpecificGravity =req.body.SpecificGravity;
    tit.SurfaceTreatment =req.body.SurfaceTreatment;
    tit.UsageOfChemical=req.body.UsageOfChemical;
    tit.Item=req.body.Item;
    await data.save();
    res.send(data);
    });
    app.listen(3000,()=>{
        console.log("server started at 3000");
    })
})