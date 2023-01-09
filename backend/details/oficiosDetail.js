const mongoose = require("mongoose");


const OficioSchema = new mongoose.Schema(
    {
        numeroOficio:{type:String, trim:true, required: true},
        dataDeExpedicao:{type:String, trim:true, required: true},
        estadoOficio:{type:String, trim:true, required: true}
   
    },
    { 
        collection:"OficioDoc",
    }
);

mongoose.model("OficioDoc", OficioSchema);