const mongoose = require('mongoose');

const schema = mongoose.Schema({
    PrinterName: String,
    PrinterModel: String,
    PrinterMaker: String,
    PrinterImage:String,
    PrinterPrice:Number,
    PrinterDescription:String,
    id:Number
});

module.exports = mongoose.model("Printer",schema);