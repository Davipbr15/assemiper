const mongoose = require("mongoose");


const ConviteReuniaoSchema = new mongoose.Schema(
    {
       // Data, Nome dos Presentes Na Reunião, Tema da Reunião
       dataReuniao:{type:String, trim:true, required: true},
       convidadosReuniao:{type:String, trim:true, required: true},
       temaReuniao:{type:String, trim:true, required: true},
    },
    {
        collection:"ConviteReuniao",
    }
);

mongoose.model("ConviteReuniao", ConviteReuniaoSchema);