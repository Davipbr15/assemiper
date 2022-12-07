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

app.get('/', async(req,res)=>{

    res.send("Entrou no site.")

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

app.get("/api/searchAssociate", async(req,res)=>{

    try{
        const Asc = await Associate.find().sort({ associateId: -1 });
        res.status(200).json(Asc);
    }catch(error){
        res.status(400).json({message : error.message })
    }
    

})
app.post("/api/editAssociate", async(req,res)=>{

    Associate.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message : err.message || "Error Occurred while retriving user information"})
    })

    // const id = req.params.id;
    // Associate.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    // .then(data =>{
    //     if(!data){
    //         res.status(404).send({message: "Cannot Update user with ${id}, Maybe user not found!"})
    //     }else{
    //         res.send(data)
    //     }

    // })
    // .catch(err =>{
    //     res.status(500).send({message: "Error Update User Information"})
    // })
})

app.post("/api/registerAssociate", async(req,res)=>{
    /*
{
"dadosPessoais":{"nomeCompleto":"nomeCompletob","estadoCivil":"estadoCivilb","nacionalidade":"nacionalidadeb","naturalidade":"naturalidadeb","dataDeNascimento":"dataDeNascimentob","cpf":"cpfb","profissao":"profissaob","documentoIdentificacao":"documentoIdentificacaob","numeroDocumento":"numeroDocumentob","orgaoExpeditor":"orgaoExpeditorb","enderecoPessoal":"enderecoPessoalb","numeroEnderecoPessoal":"numeroEnderecoPessoalb","complementoPessoal":"complementoPessoalb","bairroPessoal":"bairroPessoalb","cep":"cepb","cidadeEstadoPessoal":"cidadeEstadoPessoalb","emailPessoal":"emailPessoalb","telefoneFixoPessoal":"telefoneFixoPessoalb","celularPessoal":"celularPessoalb"
}
}*/
 /*dadosPessoais:{ nomeCompleto:nomeCompletob, estadoCivil:estadoCivilb, nacionalidade:nacionalidadeb, naturalidade:naturalidadeb, dataDeNascimento:dataDeNascimentob, cpf:cpfb, profissao:profissaob, documentoIdentificacao:documentoIdentificacaob, numeroDocumento:numeroDocumentob, orgaoExpeditor:orgaoExpeditorb, enderecoPessoal:enderecoPessoalb, numeroEnderecoPessoal:numeroEnderecoPessoalb, complementoPessoal:complementoPessoalb, bairroPessoal:bairroPessoalb, cep:cepb, cidadeEstadoPessoal:cidadeEstadoPessoalb, emailPessoal:emailPessoalb, telefoneFixoPessoal:telefoneFixoPessoalb, celularPessoal:celularPessoalb }
    });*/
    const {validadeAlvarab,areaM2Funcionamentob,numeroInscricaoMunicipalb,dataDeEmissaoBombeirosb,dataDeValidadeBombeirosb,areaM2Bombeirosb,dataDeValidadeVigilanciab,inscricaoVigilanciaSanitariab,dataDeEmissaoLicencaAmbientalb,dataDeValidadeLicencaAmbientalb,tipoContratob,baixadab,numeroDaPastab,nomeCompletob,estadoCivilb,nacionalidadeb,naturalidadeb,dataDeNascimentob,cpfb,profissaob,documentoIdentificacaob,numeroDocumentob,orgaoExpeditorb,enderecoPessoalb,numeroEnderecoPessoalb,complementoPessoalb,bairroPessoalb,cepb,cidadeEstadoPessoalb,emailPessoalb,telefoneFixoPessoalb,celularPessoalb,razaoSocialb,nomeFantasiab,cnpjb,numeroInscricaob,enderecoSedeb,numeroSedeb,complementoSedeb,bairroSedeb,cepSedeb,cidadeEstadoSedeb,emailProfissionalb,dataDeAberturab,quantidadePessoasOcupadasb,ramoDaAtividadeb,} = req.body;
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

    try{

        Associate.deleteOne({ associateId: 7 });

        res.send("A luz");

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


app.post("/api/loginUser", async(req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    const { usernameb, passwordb } = await req.body;
    console.log(typeof(usernameb) + " " + usernameb)
    console.log(typeof(passwordb) + " " + passwordb)
	const user = await Login.findOne({ username: usernameb })

    console.log(user)



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

        
		return res.status(200).send("Logado");
	}

    console.log("Senha ou Usuário Inválido")


});

app.post("/api/registerUser", async(req,res)=>{
    var salt = bcrypt.genSaltSync(10);
    console.log(req.body);

    const { usernameb, passwordb, nomeCompletoUserb} = await req.body;

    const Asc = await Login.findOne({ username: usernameb })
    if(Asc == null){
        
        
	if (!usernameb || typeof usernameb !== 'string') {
        res.status(200);
        //Invalid usernameb
	}

	if (!passwordb || typeof passwordb !== 'string') {
        res.status(201)
        //res.json({ status: 'error', error: 'Invalid password' });
	}

	if (passwordb.length < 5) {
	    res.status(202)
        //mt curto
	}

	const password = await bcrypt.hash(passwordb, salt)

	try {
		const respost = await Login.create({
            nomeCompletoUser:nomeCompletoUserb,
			username:usernameb,
			password
        })
		console.log('Usuário criado com sucesso: ', respost)
	} catch(error){
		if (error.code === 11000) {
			// duplicate key
            // Error
            console.log("203")
			res.status(203);
            
		}
        
		throw error
        
	}


	res.json({ status: 'ok' })
    console.log(usernameb + " registrado com sucesso.")

        res.status(201).send("");
    }
    else{
        res.status(204).send("");

}})

app.post("/api/deleteUser", async(req,res)=>{

    const {usernameb} = await req.body;

    const Asc = await Login.findOne({ username: usernameb })

    console.log(Asc)

        if(Asc == null){
            //Não existe
            res.status(200);

        }else{
            res.status(202);
        }
        
    
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


