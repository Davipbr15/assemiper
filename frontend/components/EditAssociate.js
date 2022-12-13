import React, { useEffect, useState, Fragment } from 'react';
import * as ReactDOM from 'react-dom';
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
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
          <table className="table-fixed min-w-screen">
            <thead>
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                  ID
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                  Nome Completo
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Nome Fantasia
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Razão Social
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 CNPJ
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Editar
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Deletar
                </th>
              </tr>
            </thead>
          <tbody>
            {assc.map((ascData, index) => {
              return (
                <tr className="bg-assemiperBlack font-bold border-b transition duration-300 ease-in-out hover:bg-red-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{ascData.associateId}</td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">{ascData.dadosPessoais?.nomeCompleto}</td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.nomeFantasia}</td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.razaoSocial}</td>
                  <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.cnpj}</td>
                  <td><button className="hover:scale-125 transition duration-150 linear text-sm text-green-600 bg-black bg-opacity-50 rounded-full p-2 bi bi-pencil"></button></td>
                  <td><button className="hover:scale-125 transition duration-150 linear  text-red-800 bg-black bg-opacity-50 rounded-full p-2"><i className="bi bi-trash"></i></button></td>
                </tr>
              )
            })
            }
          </tbody>
          </table>

</div>
</div>
</div>
</div>
</div>
)
}

function Card(props){
  return (
    <div>
      <table class="table-fixed bg-white text-black">
  <tbody>
    <tr>
      <td>{props.nomeCompleto}</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default App;

