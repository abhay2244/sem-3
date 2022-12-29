const mongoose=require('mongoose');
const schema=mongoose.Schema({
    Tid :Number,
    TName : String,
    TImage : String,
    TDescription : String,
    Appearance : String,
    ASTM_D476_84 : String,
    CASNO : String,
    ChemicalName : String,
    ColorIndex : String,
    EINECSNO : String,
    ISO591_1_2000:String,
    SpecificGravity : String,
    SurfaceTreatment : String,
    UsageOfChemical:String,
    Item:String
});
module.exports=mongoose.model("Titanium",schema);
