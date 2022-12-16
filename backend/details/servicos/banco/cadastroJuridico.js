const mongoose = require("mongoose");


const BancoCadastroJuridicoSchema = new mongoose.Schema(
    {
        razaoSocialBCJ:{type:String, trim:true, required: true},
        nomeFantasiaBCJ:{type:String, trim:true, required: true},
        cnpjBCJ:{type:String, trim:true, required: true},
        dataAtualBCJ:{type:String, trim:true, required: true},
        dataEnvioBCJ:{type:String, trim:true, required: true},
    },
    {
        collection:"BancoCadastroJuridico",
    }
);

mongoose.model("BancoCadastroJuridico", BancoCadastroJuridicoSchema);