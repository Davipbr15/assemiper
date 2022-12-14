const express = require("express");

const app = express();

const alert = require('alert'); 


const bodyParser = require('body-parser');

const createProxyMiddleware = require('http-proxy-middleware');

const cors = require('cors');

const path = require('path');

const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");
const { errorMonitor } = require("events");
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");
const { reset } = require("nodemon");
const { homedir } = require("os");

const JWT_SECRET = "sorv1veteque2rol5ei9tepikachu7portaab2acax1igeladei6rabrastemp";

app.use(express.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());

const mongoUrl="mongodb+srv://davipbr15:C8b65GpDNrNJxNu1@cluster0.asrju.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log("   |        Conectado         |");
}).catch((e) => console.log(e));

app.listen(3005, ()=>{
    console.log("   |  Server Local Iniciado.  |");
})

/*
Services
Banco
CF
require("./details/services/banco/cadastroFisicaDetail");
const BCF = mongoose.model("BancoCadastroFisica");
Services
Banco
CJ
require("./details/services/banco/cadastroJuridicoDetail");
const BCJ = mongoose.model("BancoCadastroJuridico");
*/
/*
*/

require("./details/services/banco/cadastroJuridicoDetail");
const BCJ = mongoose.model("BancoCadastroJuridico");

require("./details/services/banco/cadastroFisicaDetail");
const BCF = mongoose.model("BancoCadastroFisica");

require("./details/oficiosDetail");
const Oficios = mongoose.model("OficioDoc");

require("./details/reunioes/conviteReuniaoDetail");
const ConviteReuniao = mongoose.model("ConviteReuniao");

require("./details/userDetails");
require("./details/loginDetail");
const Login = mongoose.model("LoginUser");
const Associate = mongoose.model("AssociateInfo");
var logged = false;

const os = require('os');

const networkInfo = os.networkInterfaces();

const ipAtual = networkInfo['Wi-Fi'][3].address; // ip

app.get("/api/ipConfig", async(req,res)=>{
    
    res.send(ipAtual);
})


app.post('/', async(req,res)=>{

    console.log("Entrou na p??gina inicial/Deslogou.");
    logged = false;

})

app.post("/api/loginUser", async(req,res)=>{
    logged = true;
    var salt = bcrypt.genSaltSync(10);
    const { usernameb, passwordb } = await req.body;
    //console.log(typeof(usernameb) + " " + usernameb)
    //console.log(typeof(passwordb) + " " + passwordb)
	const user = await Login.findOne({ username: usernameb })

    //console.log(user)

    async function teste(){
        if(passwordb == null){
            return res.status(202)
        }
        if(usernameb == null){
            return res.status(202)
        }
        
        if(!passwordb){
            return res.status(201).send("Usu??rio N??o Existe");
        }
    
        if (!user) {
            return res.status(201).send("Usu??rio N??o Existe");
        }
    
        if (await bcrypt.compareSync(passwordb, user.password)) {
            // the usernameb, password combination is successful
    
            logged = true;
            return res.status(200).send("Logado");
        }
    
        console.log("Senha ou Usu??rio Inv??lido")
        return res.status(201)
    }

    teste();

    


});

app.get("/api/headerResponse", async(req,res)=>{

    console.log("Chegou no Head")

    if(logged == true){
       console.log("Navegando..")
       return res.status(200);
    }else{
       console.log("Deslogado entrando..")
       res.redirect("/")
    }
    

})

app.post("/api/registerUser", async(req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    console.log(req.body);

    const { usernameb, passwordb, nomeCompletoUserb} = await req.body;

    const asc = await Login.findOne({ username: usernameb })

    async function registrar(){
    if(asc == null){

        if (!usernameb || typeof usernameb !== 'string') {
            return res.status(200)
            //Invalid usernameb
        }

        if (!passwordb || typeof passwordb !== 'string') {
            return  res.status(201)
            //res.json({ status: 'error', error: 'Invalid password' });
        }

        if (passwordb.length < 5) {
            return res.status(202)
            //mt curto
        }

        const password = await bcrypt.hash(passwordb, salt)

        try {
            const respost = await Login.create({
                nomeCompletoUser:nomeCompletoUserb,
                username:usernameb,
                password
            })

        } catch(error){
            if (error.code === 11000) {
                // duplicate key
                // Error
                return res.status(203);
                
            }
            
            console.log(error);
            
        }


        console.log(usernameb + " registrado com sucesso.")
        return res.status(201)
        }
    else{
        console.log("ERR j?? existe")
        return res.status(204)

    }
    }

    registrar();
})

app.post("/api/deleteUser", async(req,res)=>{

    const {usernameb} = await req.body;

    const Asc = await Login.findOne({ username: usernameb })

    if(Asc == null){
        // console.log("N??o Existe!")
        return res.status(200)

    }else{
        // console.log(Asc)
        return res.status(202)
    }
})

app.get('/api/home',async(req,res)=>{

    //res.sendFile(path.resolve(__dirname, 'index.html'))

})

// app.post('/api/post',async (req, res) => {

//     const {data} = req.body;

//     console.log(data);

//     try{



//     } catch (error) {

//         res.send({status:"Algo deu errado tente novamente"})

//     }

// });

//////////////////
//ASSOCIADOS//////
//////////////////
app.post("/api/searchAssociate", async(req,res)=>{  
    console.log("Procurou os associados")

    try {
        const Asc = await Associate.find().sort({ associateId: -1 });
        res.status(200).json(Asc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post("/api/fakeResult", async(req,res)=>{  
    console.log("Pegando Resultado Fake")
    console.log("/api/fakeResult RESPONSE")

    try {
        const Asc = await Associate.find({_id:"639a11ea3efece641b62d477"})
        console.log(Asc)
        res.status(200).json(Asc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post("/api/editAssociate", async(req,res)=>{

    const {associateIdb} = req.body;
    console.log("/api/editAssociate RESPONSE")
    try {
        const Asc = await Associate.findOne( { _id:associateIdb } )
        console.log(Asc)
        res.status(200).json(Asc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
        console.log(req.body)
    }
})

app.post("/api/updateAssociate", async(req,res)=>{
        const {associateIdb,validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb ,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb} = req.body;

        console.log(req.body)
        console.log("/api/updateAssociate RESPONSE")
        try {
            const Asc = await Associate.updateOne({_id:associateIdb}, {$set:{
                numeroDaPasta:numeroDaPastab,
                dadosPessoais:{
                nomeCompleto:nomeCompletob,
                estadoCivil:estadoCivilb,
                nacionalidade:nacionalidadeb,
                naturalidade:naturalidadeb,
                dataDeNascimento:dataDeNascimentob,
                cpf:cpfb,profissao:profissaob,
                documentoIdentificacao:documentoIdentificacaob,
                numeroDocumento:numeroDocumentob,
                orgaoExpeditor:orgaoExpeditorb,
                enderecoPessoal:enderecoPessoalb,
                numeroEnderecoPessoal:numeroEnderecoPessoalb,
                complementoPessoal:complementoPessoalb,
                bairroPessoal:bairroPessoalb,
                cep:cepb,
                cidadeEstadoPessoal:cidadeEstadoPessoalb,
                emailPessoal:emailPessoalb,
                telefoneFixoPessoal:telefoneFixoPessoalb,
                celularPessoal:celularPessoalb,
                }
                ,
                dadosProfissionais:{
                razaoSocial:razaoSocialb,
                nomeFantasia:nomeFantasiab,
                cnpj:cnpjb,
                numeroInscricao:numeroInscricaob,
                enderecoSede:enderecoSedeb,
                numeroSede:numeroSedeb,
                complementoSede:complementoSedeb,
                bairroSede:bairroSedeb,
                cepSede:cepSedeb,
                cidadeEstadoSede:cidadeEstadoSedeb,
                emailProfissional:emailProfissionalb,
                dataDeAbertura:dataDeAberturab,
                quantidadePessoasOcupadas:quantidadePessoasOcupadasb,
                ramoDaAtividade:ramoDaAtividadeb
                }
                ,
                pastaDeDocumentos:{
    
                    alvaraDeFuncionamento:{
                        validadeAlvara:validadeAlvarab,
                        areaM2Funcionamento:areaM2Funcionamentob,
                        numeroInscricaoMunicipal:numeroInscricaoMunicipalb,
                    },
                    certificadoBombeiros:{
                        dataDeEmissaoBombeiros:dataDeEmissaoBombeirosb,
                        dataDeValidadeBombeiros:dataDeValidadeBombeirosb,
                        areaM2Bombeiros:areaM2Bombeirosb,
                    },
                    alvaraDeVigilanciaSanitaria:{
                        dataDeValidadeVigilancia:dataDeValidadeVigilanciab,
                        inscricaoVigilanciaSanitaria:inscricaoVigilanciaSanitariab,
                    },
                    licencaAmbiental:{
                        dataDeEmissaoLicencaAmbiental:dataDeEmissaoLicencaAmbientalb,
                        dataDeValidadeLicencaAmbiental:dataDeValidadeLicencaAmbientalb,
                    },
                    contratoDeImovel:{
                        tipoContrato:tipoContratob,
                    },
                    declaracaoDeBaixaInscricao:{
                        baixada:baixadab,
                    }
            }}})
            res.status(200).json(Asc);
        } catch (e) {
            console.error(e);
        } finally {
            console.log("Running")
        }
    
})

app.post("/api/registerAssociate", async(req,res)=>{
    /*
{
"dadosPessoais":{"nomeCompleto":"nomeCompletob","estadoCivil":"estadoCivilb","nacionalidade":"nacionalidadeb","naturalidade":"naturalidadeb","dataDeNascimento":"dataDeNascimentob","cpf":"cpfb","profissao":"profissaob","documentoIdentificacao":"documentoIdentificacaob","numeroDocumento":"numeroDocumentob","orgaoExpeditor":"orgaoExpeditorb","enderecoPessoal":"enderecoPessoalb","numeroEnderecoPessoal":"numeroEnderecoPessoalb","complementoPessoal":"complementoPessoalb","bairroPessoal":"bairroPessoalb","cep":"cepb","cidadeEstadoPessoal":"cidadeEstadoPessoalb","emailPessoal":"emailPessoalb","telefoneFixoPessoal":"telefoneFixoPessoalb","celularPessoal":"celularPessoalb"
}
}*/
 /*dadosPessoais:{ nomeCompleto:nomeCompletob, estadoCivil:estadoCivilb, nacionalidade:nacionalidadeb, naturalidade:naturalidadeb, dataDeNascimento:dataDeNascimentob, cpf:cpfb, profissao:profissaob, documentoIdentificacao:documentoIdentificacaob, numeroDocumento:numeroDocumentob, orgaoExpeditor:orgaoExpeditorb, enderecoPessoal:enderecoPessoalb, numeroEnderecoPessoal:numeroEnderecoPessoalb, complementoPessoal:complementoPessoalb, bairroPessoal:bairroPessoalb, cep:cepb, cidadeEstadoPessoal:cidadeEstadoPessoalb, emailPessoal:emailPessoalb, telefoneFixoPessoal:telefoneFixoPessoalb, celularPessoal:celularPessoalb }
    });*/
    const {dataCriacaob, validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb ,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb,} = req.body;
    //console.log(req.body);
    //console.log(nomeCompletob);
    try{
        await Associate.create({
            dataCriacao: dataCriacaob,
            numeroDaPasta:numeroDaPastab,
            dadosPessoais:{
            nomeCompleto:nomeCompletob,
            estadoCivil:estadoCivilb,
            nacionalidade:nacionalidadeb,
            naturalidade:naturalidadeb,
            dataDeNascimento:dataDeNascimentob,
            cpf:cpfb,profissao:profissaob,
            documentoIdentificacao:documentoIdentificacaob,
            numeroDocumento:numeroDocumentob,
            orgaoExpeditor:orgaoExpeditorb,
            enderecoPessoal:enderecoPessoalb,
            numeroEnderecoPessoal:numeroEnderecoPessoalb,
            complementoPessoal:complementoPessoalb,
            bairroPessoal:bairroPessoalb,
            cep:cepb,
            cidadeEstadoPessoal:cidadeEstadoPessoalb,
            emailPessoal:emailPessoalb,
            telefoneFixoPessoal:telefoneFixoPessoalb,
            celularPessoal:celularPessoalb,
            }
            ,
            dadosProfissionais:{
            razaoSocial:razaoSocialb,
            nomeFantasia:nomeFantasiab,
            cnpj:cnpjb,
            numeroInscricao:numeroInscricaob,
            enderecoSede:enderecoSedeb,
            numeroSede:numeroSedeb,
            complementoSede:complementoSedeb,
            bairroSede:bairroSedeb,
            cepSede:cepSedeb,
            cidadeEstadoSede:cidadeEstadoSedeb,
            emailProfissional:emailProfissionalb,
            dataDeAbertura:dataDeAberturab,
            quantidadePessoasOcupadas:quantidadePessoasOcupadasb,
            ramoDaAtividade:ramoDaAtividadeb
            }
            ,
            pastaDeDocumentos:{

                alvaraDeFuncionamento:{
                    validadeAlvara:validadeAlvarab,
                    areaM2Funcionamento:areaM2Funcionamentob,
                    numeroInscricaoMunicipal:numeroInscricaoMunicipalb,
                },
                certificadoBombeiros:{
                    dataDeEmissaoBombeiros:dataDeEmissaoBombeirosb,
                    dataDeValidadeBombeiros:dataDeValidadeBombeirosb,
                    areaM2Bombeiros:areaM2Bombeirosb,
                },
                alvaraDeVigilanciaSanitaria:{
                    dataDeValidadeVigilancia:dataDeValidadeVigilanciab,
                    inscricaoVigilanciaSanitaria:inscricaoVigilanciaSanitariab,
                },
                licencaAmbiental:{
                    dataDeEmissaoLicencaAmbiental:dataDeEmissaoLicencaAmbientalb,
                    dataDeValidadeLicencaAmbiental:dataDeValidadeLicencaAmbientalb,
                },
                contratoDeImovel:{
                    tipoContrato:tipoContratob,
                },
                declaracaoDeBaixaInscricao:{
                    baixada:baixadab,
                }
            }

        });

        res.send({status:"Ok"});
        console.log(nomeCompletob + " registrado com sucesso!");

    } catch (error){

        res.send({status: "Error"});
        console.log(error);

    }

    


})

app.post('/api/deleteAssociate',async(req,res)=>{

    const {associateIdb} = req.body;
    console.log(associateIdb);
    console.log(typeof(associateIdb));
    var query = { _id:associateIdb };
    try{
        Associate.deleteOne(query).then(function(){
            console.log("Tentou remover.")
        }).catch(function(error){
            console.log(error);
        })

        return res.status(200)
        

    }catch(error){
        res.status(500).send(error);
    }

})
///////////////////
//REUNI??ES////////
///////////////////
app.post("/api/registerReuniao", async(req,res)=>{

    const { 
        temaReuniaob,
        dataDaReuniaob,
        horarioReuniaob,
        convidadosReuniaob,
        resumoReuniaob,
        presentesReuniaob,
      } = req.body
    try{

        await ConviteReuniao.create({
            
            temaReuniao: temaReuniaob,
            dataDaReuniao: dataDaReuniaob,
            horarioReuniao: horarioReuniaob,
            convidadosReuniao: convidadosReuniaob,
            resumoReuniao: resumoReuniaob,
            presentesReuniao: presentesReuniaob

        });

        console.log("Criou")
        
        res.sendStatus(200)

    } catch (error){
        
        console.log(error);
        res.status(201);

    }

    


})
app.post("/api/searchReuniao", async(req,res)=>{  
    console.log("Procurou as reuni??es")

    try {
        const Reuniao = await ConviteReuniao.find().sort({ dataDaReuniao: -1 });
        res.status(200).json(Reuniao);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})
app.post("/api/getReuniao", async(req,res)=>{  
    console.log("Procurou as reuni??es");
    const {reuniaoId} = req.body;
    try {
        const Reuniao = await ConviteReuniao.findOne( {  _id:reuniaoId });
        res.status(200).json(Reuniao);
        console.log(Reuniao);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})
app.post('/api/deleteReuniao',async(req,res)=>{

    const {r_id} = await req.body;
    
    console.log( r_id);
    console.log(typeof( r_id));
    var query = { _id: r_id };
    try{
        ConviteReuniao.deleteOne(query).then(function(){
        }).catch(function(error){
            console.log(error)
        })

        res.sendStatus(200)
        console.log("Deletou")
        

    }catch(error){
        res.status(500).send(error)
    }

})
app.post("/api/updateReuniao", async(req,res)=>{
    const {
        r_id,
        temaReuniaob,
        dataDaReuniaob,
        horarioReuniaob,
        convidadosReuniaob,
        resumoReuniaob,
        presentesReuniaob,
    } = req.body;

    console.log(req.body)
    console.log("/api/updateReuniao RESPONSE")
    try {
        const Asc = await ConviteReuniao.updateOne({_id:r_id}, {$set:{
        
            temaReuniao: temaReuniaob,
            dataDaReuniao: dataDaReuniaob,
            horarioReuniao: horarioReuniaob,
            convidadosReuniao: convidadosReuniaob,
            resumoReuniao: resumoReuniaob,
            presentesReuniao: presentesReuniaob,

        }})
        res.status(200).json(Asc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }

})
//////////////////////
//////////////////////


//////////////////////
// OFICIOS ///////////
//////////////////////
app.post("/api/getOficio", async(req,res)=>{  
    console.log("Procurou o Of??cio");
    const {o_id} = req.body;
    try {
        const Ofc = await Oficios.findOne( {  _id:o_id });
        res.status(200).json(Ofc);
        console.log(Ofc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post('/api/deleteOficio',async(req,res)=>{

    const {o_id} = await req.body;

    var query = { _id: o_id };
    try{
        Oficios.deleteOne(query).then(function(){
        }).catch(function(error){
            console.log(error)
        })

        res.sendStatus(200)
        console.log("Deletou")
        

    }catch(error){
        res.status(500).send(error)
    }

    
})

app.post("/api/searchOficios", async(req,res)=>{  
    console.log("Procurou os Oficios")

    try {
        const Oficio = await Oficios.find().sort({ numeroOficio: -1 });
        res.status(200).json(Oficio);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post("/api/updateOficio", async(req,res)=>{

    const {
        o_id,
        numeroOficiob,
        dataDeExpedicaob,
        estadoOficiob
    } = req.body;

    var query = { _id: o_id };

    console.log(req.body)

    console.log("/api/updateOficio RESPONSE")
    try {
        const Ofc = await Oficios.updateOne( query, {$set:{
        
            "numeroOficio": numeroOficiob,
            "dataDeExpedicaob": dataDeExpedicaob,
            "estadoOficio": estadoOficiob,

        }})
        console.log(Ofc);
        console.log("Tentou Mudar!")
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }


})

app.post("/api/registerOficio", async(req,res)=>{

    
    const { 
        numeroOficiob,
        dataDeExpedicaob,
        estadoOficiob,
      } = req.body
    try{

        await Oficios.create({
            
           numeroOficio: numeroOficiob,
           dataDeExpedicao: dataDeExpedicaob,
           estadoOficio: estadoOficiob,

        });

        console.log("Criou")
        
        res.sendStatus(200)

    } catch (error){
        
        console.log(error);
        res.status(201);

    }

})
////////////////////
///////////////////

///////////////////
//PESSOA F I S I C A 
///////////////////

app.post("/api/getBCF", async(req,res)=>{  
    console.log("Procurou a pessoa f??sica");
    const { bcf_id} = req.body;
    try {
        const CF = await BCF.findOne( {  _id: bcf_id });
        res.status(200).json(CF);
        console.log(Ofc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post('/api/deleteBCF',async(req,res)=>{

    const {bcf_id} = await req.body;

    var query = { _id: bcf_id };
    try{
     BCF.deleteOne(query).then(function(){
        }).catch(function(error){
            console.log(error)
        })

        res.sendStatus(200)
        console.log("Deletou")
        

    }catch(error){
        res.status(500).send(error)
    }

    
})

app.post("/api/searchBCF", async(req,res)=>{  
    console.log("Procurou os BCF")

    try {
        const Oficio = await BCF.find().sort({ dataDoCadastroBCF: -1 });
        res.status(200).json(Oficio);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post("/api/updateBCF", async(req,res)=>{

    const {
        o_id,
        nomeBCFb,
        cpfBCFb,
        telefoneBCFb,
        dataDoCadastroBCFb,
        dataDoEnvioBCFb
    } = req.body;

    var query = { _id: o_id };

    console.log(req.body)

    console.log("/api/updateBCF RESPONSE")
    try {
        const Ofc = await BCF.updateOne( query, {$set:{
        
        nomeBCF: nomeBCFb,
        cpfBCF: cpfBCFb,
        telefoneBCF: telefoneBCFb,
        dataDoCadastroBCF: dataDoCadastroBCFb,
        dataDoEnvioBCF: dataDoEnvioBCFb,

        }})
        console.log(Ofc);
        console.log("Tentou Mudar!")
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }


})

app.post("/api/registerBCF", async(req,res)=>{

    
    const { 
        nomeBCFb,
        cpfBCFb,
        telefoneBCFb,
        dataDoCadastroBCFb,
        dataDoEnvioBCFb
      } = req.body
    try{

        await BCF.create({
            
           
            nomeBCF: nomeBCFb,
            cpfBCF: cpfBCFb,
            telefoneBCF: telefoneBCFb,
            dataDoCadastroBCF: dataDoCadastroBCFb,
            dataDoEnvioBCF: dataDoEnvioBCFb


        });

        console.log("Criou")
        
        res.sendStatus(200)

    } catch (error){
        
        console.log(error);
        res.status(201);

    }

})

//////////////////
/////////////////


///////////////////
//PESSOA J U R I D I C A
///////////////////

app.post("/api/getBCJ", async(req,res)=>{  
    console.log("Procurou a pessoa jur??ridca");
    const {bcj_id} = req.body;
    try {
        const CJ = await BCJ.findOne( {  _id: bcj_id });
        res.status(200).json(CJ);
        console.log(Ofc);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post('/api/deleteBCJ',async(req,res)=>{

    const {bcj_id} = await req.body;

    var query = { _id: bcj_id };
    try{
     BCJ.deleteOne(query).then(function(){
        }).catch(function(error){
            console.log(error)
        })

        res.sendStatus(200)
        console.log("Deletou")
        

    }catch(error){
        res.status(500).send(error)
    }

    
})

app.post("/api/searchBCJ", async(req,res)=>{  
    console.log("Procurou os BCJ")

    try {
        const Oficio = await BCJ.find().sort({ dataEnvioBCJ: -1 });
        res.status(200).json(Oficio);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }
    
})

app.post("/api/updateBCJ", async(req,res)=>{

    const {
        bcj_id,
        razaoSocialBCJb,
        nomeFantasiaBCJb,
        cnpjBCJb,
        dataAtualBCJb,
        dataEnvioBCJb,
    } = req.body;

    var query = { _id: bcj_id };

    console.log(req.body)

    console.log("/api/updateBCJ RESPONSE")
    try {
        const Ofc = await BCJ.updateOne( query, {$set:{
        
        razaoSocialBCJ:razaoSocialBCJb,
        nomeFantasiaBCJ:nomeFantasiaBCJb,
        cnpjBCJ:cnpjBCJb,
        dataAtualBCJ:dataAtualBCJb,
        dataEnvioBCJ:dataEnvioBCJb,

        }})
        console.log(Ofc);
        console.log("Tentou Mudar!")
        res.sendStatus(200);
    } catch (e) {
        console.error(e);
    } finally {
        console.log("Running")
    }


})

app.post("/api/registerBCJ", async(req,res)=>{

    
    const { 
        razaoSocialBCJb,
        nomeFantasiaBCJb,
        cnpjBCJb,
        dataAtualBCJb,
        dataEnvioBCJb,
      } = req.body
    try{

        await BCJ.create({
            
            razaoSocialBCJ:razaoSocialBCJb,
            nomeFantasiaBCJ:nomeFantasiaBCJb,
            cnpjBCJ:cnpjBCJb,
            dataAtualBCJ:dataAtualBCJb,
            dataEnvioBCJ:dataEnvioBCJb,

        });

        console.log("Criou")
        
        res.sendStatus(200)

    } catch (error){
        
        console.log(error);
        res.status(201);

    }

})

//////////////////
/////////////////

app.post('/api/changePassword', async (req, res) => {
	const { token, newPassword: passwordb } = req.body
	if (!passwordb || typeof passwordb !== 'string') {
		return res.json({ status: 'Error', error: 'Senha Inv??lida' })
	}
	if (passwordb.length < 5) {
		return res.json({
			status: 'error',
			error: 'Sua senha ?? muito curta deve ter mais de 6 caracteres.'                
	})
}


	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(passwordb, 10)
        
		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'Ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'Error', error: ';))' })
	}
})


