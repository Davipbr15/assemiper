const mongoose = require("mongoose");


const ReuniaoSchema = new mongoose.Schema(
    {
       // Data, Nome dos Presentes Na Reunião, Tema da Reunião
       dataReuniao:{type:String, trim:true, required: true},
       presentesReuniao:{type:String, trim:true, required: true},
       temaReuniao:{type:String, trim:true, required: true},
       resumoReuniao:{type:String, trim:true, required: true},
    },
    {
        collection:"AtaReuniao",
    }
);

mongoose.model("AtaReuniao", ReuniaoSchema);