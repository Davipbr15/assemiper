import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {ipatual} from './ip.js';

function App() {

const initialValue = {
  nomeCompletob: '',
  estadoCivilb: '',
  nacionalidadeb: '',
  naturalidadeb: '',
  dataDeNascimentob: '',
  cpfb: '',
  profissaob: '',
  documentoIdentificacaob: '',
  numeroDocumentob: '',
  orgaoExpeditorb: '',
  enderecoPessoalb: '',
  numeroEnderecoPessoalb: '',
  complementoPessoalb: '',
  bairroPessoalb: '',
  cepb: '',
  cidadeEstadoPessoalb: '',
  emailPessoalb: '',
  telefoneFixoPessoalb: '',
  celularPessoalb: '',
  razaoSocialb: '',
  nomeFantasiab: '',
  cnpjb: '',
  numeroInscricaob: '',
  numeroSedeb: '',
  complementoSedeb: '',
  bairroSedeb: '',
  cepSedeb: '',
  cidadeEstadoSedeb: '',
  emailProfissionalb: '',
  dataDeAbertura: '',
  quantidadePessoasOcupadasb: '',
  ramoDaAtividadeb: '',
  numeroDaPastab: '',
  validadeAlvarab: '',
  areaM2Funcionamentob: '',
  numeroInscricaoMunicipalb:'',
  dataDeEmissaoBombeirosb:'',
  dataDeValidadeBombeirosb:'',
  areaM2Bombeirosb:'',
  dataDeValidadeVigilanciab:'',
  inscricaoVigilanciaSanitariab:'',
  dataDeEmissaoLicencaAmbientalb:'',
  dataDeValidadeLicencaAmbientalb:'',
  tipoContratob:'',
  baixadab:'',
}

const [values, setValues] = useState(initialValue);


function onChange(ev) {

  const {name, value} = ev.target;

  console.log({name, value});

  setValues({ ...values, [name]: value });
  
};


const onSubmit = async(ev) => {
          
  ev.preventDefault();

  try{

    if (window.confirm("Você deseja realmente registrar este associado?")) {

      const resposta = await Axios.post('http://'+ipatual+'/api/editAssociate', values);

      var result = resposta?.status;

      if(result == 200){
        window.alert("Registrado com sucesso.")
      }

    }else{

    }
    
    }catch(error){
        console.log(error);
    }
    
    // Go to /some/path.
}

const [assc, setAssociate ] = useState([]);
    
void async function fetchData(){
  try{
    
  const resposta = await Axios.get('http://'+ ipatual +'/api/searchAssociate')
  setAssociate(resposta?.data)

  }catch(error){
    console.log(error);
  }
}()

void async function editAssociate(){
  try{
    
  const resposta = await Axios.get('http://'+ ipatual +'/api/edit', values)
  setAssociate(resposta?.data)

  }catch(error){
    console.log(error);
  }
}()

return(

<div className="App">

<div className="grid grid-cols-1 justify-center">
<table class="table-fixed bg-white text-black">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Razão Social</th>
      <th>Nome Fantasia</th>
    </tr>
  </thead>

            {assc.map((ascData, index) => {
                return(
                <div key={index} className="block justify-center max-w-2xl p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="text-2xl text-center">{ascData.dadosProfissionais?.nomeFantasia}</h1>
                    <b className="">ID do Associado: {ascData.associateId}</b>
                    <br></br>
                    <b className="">Pasta: {ascData.numeroDaPasta}</b>
                    <hr></hr>
                    <div>
                    <b className="text-2xl">Dados Pessoais</b>
                    <br></br>
                    <b className="text-md">Nome: <b className="font-normal">{ascData.dadosPessoais?.nomeCompleto}</b></b>
                    <br></br>
                    </div>
                    <br></br>
                    <div>
                    <hr></hr>
                    <b className="text-2xl">Dados Profissionais</b>
                    <br></br>
                    <b className="text-md">Razão Social: <b className="font-normal">{ascData.dadosProfissionais?.razaoSocial}</b></b>
                    <br></br>
                    <b className="text-md">Nome Fantasia: <b className="font-normal">{ascData.dadosProfissionais?.nomeFantasia}</b></b>
                    </div>
                <br></br>
                <button className="text-green-600">
                  Editar
                </button>
                <br></br>
                <button className="text-red-500">
                  Deletar
                </button>
                </div>
                );
            
        }
            )}

             
</table>

            
            
            </div>

</div>
)
}

export default App;

