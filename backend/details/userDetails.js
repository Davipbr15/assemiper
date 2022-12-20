const mongoose = require("mongoose");


const AssociateInfoSchema = new mongoose.Schema(
    {
      dataCriacao:{type:String,trim:true, required:true},
      numeroDaPasta:{type:String,trim:true, required:true},  
      dadosPessoais: {

            nomeCompleto:{type: String,trim: true},
            estadoCivil:{type:String,trim:true, required:true},
            nacionalidade:{type:String,trim:true, required:true},
            naturalidade:{type:String,trim:true, required:true},
            dataDeNascimento:{type:String,trim:true, required:true},
            cpf:{type:String,trim:true, required:true},
            profissao:{type:String,trim:true, required:true},
            documentoIdentificacao:{type:String,trim:true, required:true},
            numeroDocumento:{type:String,trim:true, required:true},
            orgaoExpeditor:{type:String,trim:true, required:true},
            enderecoPessoal:{type:String,trim:true, required:true},
            numeroEnderecoPessoal:{type:String,trim:true, required:true},
            complementoPessoal:{type:String,trim:true, required:true},
            bairroPessoal:{type:String,trim:true, required:true},
            cep:{type:String,trim:true, required:true},
            cidadeEstadoPessoal:{type:String,trim:true, required:true},
            emailPessoal:{type:String,trim:true, required:true},
            telefoneFixoPessoal:{type:String,trim:true, required:true},
            celularPessoal:{type:String,trim:true, required:true},

        }
        ,
        dadosProfissionais: {
            razaoSocial:{type:String,trim:true, required:true},
            nomeFantasia:{type:String,trim:true, required:true},
            cnpj:{type:String,trim:true, required:true},
            numeroInscricao:{type:String,trim:true, required:true},
            enderecoSede:{type:String,trim:true, required:true},
            numeroSede:{type:String,trim:true, required:true},
            complementoSede:{type:String,trim:true, required:true},
            bairroSede:{type:String,trim:true, required:true},
            cepSede:{type:String,trim:true, required:true},
            cidadeEstadoSede:{type:String,trim:true, required:true},
            emailProfissional:{type:String,trim:true, required:true},
            dataDeAbertura:{type:String,trim:true, required:true},  
            quantidadePessoasOcupadas:{type:String,trim:true, required:true},
            ramoDaAtividade:{type:String,trim:true, required:true},
        },
        pastaDeDocumentos:{

            alvaraDeFuncionamento:{

                validadeAlvara:{type:String,trim:true},
                areaM2Funcionamento:{type:String,trim:true},
                numeroInscricaoMunicipal:{type:String,trim:true}

            },
            certificadoBombeiros:{

                dataDeEmissaoBombeiros:{type:String,trim:true},
                dataDeValidadeBombeiros:{type:String,trim:true},
                areaM2Bombeiros:{type:String,trim:true}

            },
            alvaraDeVigilanciaSanitaria:{

                dataDeValidadeVigilancia:{type:String,trim:true},
                inscricaoVigilanciaSanitaria:{type:String,trim:true}

            },
            licencaAmbiental:{

                dataDeEmissaoLicencaAmbiental:{type:String,trim:true},
                dataDeValidadeLicencaAmbiental:{type:String,trim:true},

            },
            contratoDeImovel:{

                tipoContrato:{type:String,trim:true}

            },
            declaracaoDeBaixaInscricao:{

                baixada:{type:String,trim:true}

            }

        }
    //
    },
    {
        collection:"AssociateInfo",
    }
);

mongoose.model("AssociateInfo", AssociateInfoSchema);