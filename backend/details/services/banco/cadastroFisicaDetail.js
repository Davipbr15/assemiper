const mongoose = require("mongoose");


const BancoCadastroFisicaSchema = new mongoose.Schema(
    {
        nomeBCF:{type:String, trim:true, required: true},
        cpfBCF:{type:String, trim:true, required: true},
        telefoneBCF:{type:String, trim:true, required: true},
        dataDoCadastroBCF:{type:String, trim:true, required: true},
        dataDoEnvioBCF:{type:String, trim:true, required: true}
    },
    {
        collection:"BancoCadastroFisica",
    }
);

mongoose.model("BancoCadastroFisica", BancoCadastroFisicaSchema);