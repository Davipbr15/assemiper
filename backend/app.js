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

require("./userDetails");
require("./loginDetail");
const Login = mongoose.model("LoginUser");
const Associate = mongoose.model("AssociateInfo");
var logged = true;

app.post('/', async(req,res)=>{

    console.log("Entrou na página inicial/Deslogou.");
    logged = true;

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
            return res.status(201).send("Usuário Não Existe");
        }
    
        if (!user) {
            return res.status(201).send("Usuário Não Existe");
        }
    
        if (await bcrypt.compareSync(passwordb, user.password)) {
            // the usernameb, password combination is successful
    
            logged = true;
            return res.status(200).send("Logado");
        }
    
        console.log("Senha ou Usuário Inválido")
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
        console.log("ERR já existe")
        return res.status(204)

    }
    }

    registrar();
})

app.post("/api/deleteUser", async(req,res)=>{

    const {usernameb} = await req.body;

    const Asc = await Login.findOne({ username: usernameb })

    if(Asc == null){
        // console.log("Não Existe!")
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
    const {validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb ,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb,} = req.body;
    console.log("/api/editAssociate RESPONSE")
    try {
        const Asc = await Associate.find({_id:associateIdb})
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
        const {associateIdb} = req.body;

        const {validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb ,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb,} = req.body;

        console.log(req.body)
        console.log("/api/editAssociate RESPONSE")
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
            res.status(200);
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
    const {validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb ,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb,} = req.body;
    //console.log(req.body);
    //console.log(nomeCompletob);
    try{
        await Associate.create({
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
            return res.status(200)
        }).catch(function(error){
            console.log(error);
        })
        

    }catch(error){
        res.status(500).send(error);
    }

    // const assc = req.params.assc;
    //     try{

    //     Associate.findOneAndDelete({"associateId": assc}

    //     }catch(error => {
    //         res.status(500).send(error);
    //     });

})

app.post('/api/changePassword', async (req, res) => {
	const { token, newPassword: passwordb } = req.body
	if (!passwordb || typeof passwordb !== 'string') {
		return res.json({ status: 'Error', error: 'Senha Inválida' })
	}
	if (passwordb.length < 5) {
		return res.json({
			status: 'error',
			error: 'Sua senha é muito curta deve ter mais de 6 caracteres.'                
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


