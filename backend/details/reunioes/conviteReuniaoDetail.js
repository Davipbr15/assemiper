const mongoose = require("mongoose");


const ConviteReuniaoSchema = new mongoose.Schema(
    {
       // Data, Nome dos Presentes Na Reunião, Tema da Reunião
       temaReuniao:{type:String, trim:true, required: true},
       dataDaReuniao:{type:String, trim:true, required: true},
       convidadosReuniao:{type:String, trim:true, required: true},
       horarioReuniao:{type:String, trim:true, required: true},
       resumoReuniao:{type:String, trim:true},
       presentesReuniao:{type:String, trim:true},
    },
    {
        collection:"ConviteReuniao",
    }
);

mongoose.model("ConviteReuniao", ConviteReuniaoSchema);