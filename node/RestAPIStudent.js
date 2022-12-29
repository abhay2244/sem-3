const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Student=require('./model/Student');
const Printer = require('./model/Printer');
const cors=require('cors')
mongoose.connect('mongodb+srv://abhay:abhay@cluster0.qjl9og5.mongodb.net/collages?retryWrites=true&w=majority').then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());
    app.get('/students',async (req,res) =>{
        const data=await Student.find();
        res.send(data);
    });
    app.get('/student/:id',async (req,res) => {
        const data= await Student.findOne({id:req.params.id});
        res.send(data);
    });
    app.delete('/student/:id',async (req,res) => {
        const data= await Student.deleteOne({id:req.params.id});
        res.send(data);
    });
    app.post('/student',async (req,res) =>{
    const stu=new Student();
    stu.id =req.body.id;
    stu.StudentName =req.body.SN;
    stu.StudentEmail =req.body.SE;
    stu.StudentMobile = req.body.SM;
    stu.StudentParentMobile =req.body.SPM;
    stu.StudentImage = req.body.SI;
    stu.StudentDepartment =req.body.SD;

    const data=stu.save();
    res.send(data);
    });
    app.put('/student/:id',async (req,res) => {
    const data=await Student.findOne({id:req.params.id});
    data.StudentName =req.body.SN;
    data.StudentEmail =req.body.SE;
    data.StudentMobile = req.body.SM;
    data.StudentParentMobile =req.body.SPM;
    data.StudentImage = req.body.SI;
    data.StudentDepartment =req.body.SD;
    await data.save();
    res.send(data);
    });
    app.listen(3004,()=>{
        console.log("Server Started at 3004");
    })
})