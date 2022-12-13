import React, { useEffect, useState } from 'react';
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

<div className="justify-center">

            {/* {assc.map((ascData, index) => {
                return(
            
                );
              }
            )} */}

            
            
</div>

</div>
)
}

function Card(props){
  return (
    <div>
      <table class="table-fixed bg-white text-black">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Razão Social</th>
      <th>Nome Fantasia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default App;

