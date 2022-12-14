import React, { useEffect, useState, Fragment } from 'react';
import * as ReactDOM from 'react-dom';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {ipatual} from './ip.js';
import InputMask from 'react-input-mask';


function App() {

  const [editando, setEditando] = useState([]);


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
  enderecoSedeb: '',
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
  associateIdb:'',
  dataDeAberturab:'',
  idDelete:"",
  nomeF:"",
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

    console.log(editando)
    
    // values.nomeCompletob = editando.dadosPessoais.nomeCompleto;
    // values.estadoCivilb = editando.dadosPessoais.estadoCivil ?? null;
    if(1==1){
      if(values.nomeCompletob == ''){
        values.nomeCompletob = editando.dadosPessoais.nomeCompleto 
      }else{
        values.nomeCompletob = values.nomeCompletob 
      }

      if(values.estadoCivilb == ''){
        values.estadoCivilb = editando.dadosPessoais.estadoCivil 
      }else{
        values.estadoCivilb = values.estadoCivilb 
      }

      if(values.nacionalidadeb == ''){
        values.nacionalidadeb = editando.dadosPessoais.nacionalidade 
      }else{
        values.nacionalidadeb = values.nacionalidadeb 
      }

      if(values.naturalidadeb == ''){
        values.naturalidadeb = editando.dadosPessoais.naturalidade 
    }else{
      values.naturalidadeb = values.naturalidadeb 
    }

      if(values.dataDeNascimentob == ''){
        values.dataDeNascimentob  = editando.dadosPessoais.dataDeNascimento 
      }else{
        values.dataDeNascimentob = values.dataDeNascimentob 
      }

      if(values.cpfb == ''){
        values.cpfb  = editando.dadosPessoais.cpf 
    }else{
        values.cpfb = values.cpfb 
    }

      if(values.profissaob == ''){
        values.profissaob  = editando.dadosPessoais.profissao 
      }else{
    values.profissaob = values.profissaob 
    }

    if(values.documentoIdentificacaob == ''){
      values.documentoIdentificacaob  = editando.dadosPessoais.documentoIdentificacao 
  }else{
    values.documentoIdentificacaob = values.documentoIdentificacaob 
  }
    
    if(values.numeroDocumentob == ''){
      values.numeroDocumentob = editando.dadosPessoais.numeroDocumento 
    }else{
      values.numeroDocumentob = values.numeroDocumentob 
    }

    if(values.orgaoExpeditorb == ''){
      values.orgaoExpeditorb = editando.dadosPessoais.orgaoExpeditor 
    }else{
      values.orgaoExpeditorb = values.orgaoExpeditorb 
    }

    if(values.enderecoPessoalb  == ''){
      values.enderecoPessoalb = editando.dadosPessoais.enderecoPessoal 
    }else{
      values.enderecoPessoalb = values.enderecoPessoalb 
    }

    if(values.numeroEnderecoPessoalb == ''){
      values.numeroEnderecoPessoalb  = editando.dadosPessoais.numeroEnderecoPessoal 
    }else{
      values.numeroEnderecoPessoalb = values.numeroEnderecoPessoalb 
    }

    if(values.complementoPessoalb == ''){
      values.complementoPessoalb  = editando.dadosPessoais.complementoPessoal 
    }else{
      values.complementoPessoalb = values.complementoPessoalb 
    }
      
    if(values.bairroPessoalb == ''){
      values.bairroPessoalb  = editando.dadosPessoais.bairroPessoal 
    }else{
      values.bairroPessoalb = values.bairroPessoalb 
    }   
        
    if(values.cepb == ''){
      values.cepb  = editando.dadosPessoais.cep 
    }else{
      values.cepb = values.cepb 
    }

    if(values.cidadeEstadoPessoalb == ''){
      values.cidadeEstadoPessoalb = editando.dadosPessoais.cidadeEstadoPessoal 
    }else{
      values.cidadeEstadoPessoalb = values.cidadeEstadoPessoalb 
    }

    if(values.emailPessoalb == ''){
      values.emailPessoalb  = editando.dadosPessoais.emailPessoal 
    }else{
      values.emailPessoalb = values.emailPessoalb 
    }

    if(values.telefoneFixoPessoalb == ''){
      values.telefoneFixoPessoalb = editando.dadosPessoais.telefoneFixoPessoal 
    }else{
      values.telefoneFixoPessoalb = values.telefoneFixoPessoalb 
    }
        
    if(values.celularPessoalb  == ''){
      values.celularPessoalb   = editando.dadosPessoais.celularPessoal 
    }else{
      values.celularPessoalb  = values.celularPessoalb  
    }

    if(values.razaoSocialb  == ''){
      values.razaoSocialb   = editando.dadosProfissionais.razaoSocial 
    }else{
      values.razaoSocialb  = values.razaoSocialb  
    }

    if(values.nomeFantasiab  == ''){
      values.nomeFantasiab   = editando.dadosProfissionais.nomeFantasia 
    }else{
      values.nomeFantasiab  = values.nomeFantasiab  
    }

    if(values.cnpjb  == ''){
      values.cnpjb   = editando.dadosProfissionais.cnpj 
    }else{
      values.cnpjb  = values.cnpjb  
    }

    if(values.numeroInscricaob  == ''){
      values.numeroInscricaob  = editando.dadosProfissionais.numeroInscricao 
    }else{
      values.numeroInscricaob  = values.numeroInscricaob 
    }

    if(values.numeroSedeb  == ''){
      values.numeroSedeb = editando.dadosProfissionais.numeroSede 
    }else{
      values.numeroSedeb = values.numeroSedeb  
    }

    if(values.complementoSedeb == ''){
      values.complementoSedeb  = editando.dadosProfissionais.complementoSede 
    }else{
      values.complementoSedeb  = values.complementoSedeb 
    }
      
    if(values.bairroSedeb  == ''){
      values.bairroSedeb = editando.dadosProfissionais.bairroSede 
    }else{
      values.bairroSedeb = values.bairroSedeb 
    }

    if(values.cepSedeb == ''){
      values.cepSedeb  = editando.dadosProfissionais.cepSede 
    }else{
      values.cepSedeb  = values.cepSedeb 
    }

    if(values.cidadeEstadoSedeb == ''){
      values.cidadeEstadoSedeb = editando.dadosProfissionais.cidadeEstadoSede 
    }else{
      values.cidadeEstadoSedeb = values.cidadeEstadoSedeb 
    }

    if(values.emailProfissionalb  == ''){
      values.emailProfissionalb  = editando.dadosProfissionais.emailProfissional 
    }else{
      values.emailProfissionalb  = values.emailProfissionalb 
    }

    if(values.dataDeAbertura  == ''){
      values.dataDeAbertura = editando.dadosProfissionais.dataDeAbertura 
    }else{
      values.dataDeAbertura = values.dataDeAbertura 
    }

    if(values.quantidadePessoasOcupadasb == ''){
      values.quantidadePessoasOcupadasb = editando.dadosProfissionais.quantidadePessoasOcupadas 
    }else{
      values.quantidadePessoasOcupadasb = values.quantidadePessoasOcupadasb 
    }

    if(values.ramoDaAtividadeb == ''){
      values.ramoDaAtividadeb = editando.dadosProfissionais.ramoDaAtividade 
    }else{
      values.ramoDaAtividadeb = values.ramoDaAtividadeb 
    }

    if(values.dataDeAberturab == ''){
      values.dataDeAberturab = editando.dadosProfissionais.dataDeAbertura
    }else{
      values.dataDeAberturab = values.dataDeAberturab
    }

    if(values.numeroDaPastab  == ''){
      values.numeroDaPastab = editando.numeroDaPasta
    }else{
      values.numeroDaPastab = values.numeroDaPastab 
    }

    if(values.validadeAlvarab  == ''){
      values.validadeAlvarab  = editando.pastaDeDocumentos.alvaraDeFuncionamento.validadeAlvara 
    }else{
      values.validadeAlvarab = values.validadeAlvarab 
    }

    if(values.areaM2Funcionamentob == ''){
      values.areaM2Funcionamentob = editando.pastaDeDocumentos.alvaraDeFuncionamento.areaM2Funcionamento 
    }else{
      values.areaM2Funcionamentob = values.areaM2Funcionamentob 
    }

    if(values.numeroInscricaoMunicipalb == ''){
      values.numeroInscricaoMunicipalb = editando.pastaDeDocumentos.alvaraDeFuncionamento.numeroInscricaoMunicipal 
    }else{
      values.numeroInscricaoMunicipalb = values.numeroInscricaoMunicipalb 
    }

    if(values.dataDeEmissaoBombeirosb == ''){
      values.dataDeEmissaoBombeirosb = editando.pastaDeDocumentos.certificadoBombeiros.dataDeEmissaoBombeiros 
    }else{
      values.dataDeEmissaoBombeirosb = values.dataDeEmissaoBombeirosb 
    }

    if(values.dataDeValidadeBombeirosb == ''){
      values.dataDeValidadeBombeirosb = editando.pastaDeDocumentos.certificadoBombeiros.dataDeValidadeBombeiros 
    }else{
      values.dataDeValidadeBombeirosb = values.dataDeValidadeBombeirosb 
    }
      
    if(values.areaM2Bombeirosb == ''){
      values.areaM2Bombeirosb = editando.pastaDeDocumentos.certificadoBombeiros.areaM2Bombeiros 
    }else{
      values.areaM2Bombeirosb = values.areaM2Bombeirosb 
    }

    if(values.dataDeValidadeVigilanciab == ''){
      values.dataDeValidadeVigilanciab = editando.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.dataDeValidadeVigilancia 
    }else{
      values.dataDeValidadeVigilanciab = values.dataDeValidadeVigilanciab 
    }

    if(values.inscricaoVigilanciaSanitariab == ''){
      values.inscricaoVigilanciaSanitariab = editando.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.inscricaoVigilanciaSanitaria 
    }else{
      values.inscricaoVigilanciaSanitariab = values.inscricaoVigilanciaSanitariab 
    }

    if(values.dataDeEmissaoLicencaAmbientalb == ''){
      values.dataDeEmissaoLicencaAmbientalb = editando.pastaDeDocumentos.licencaAmbiental.dataDeEmissaoLicencaAmbiental 
    }else{
      values.dataDeEmissaoLicencaAmbientalb = values.dataDeEmissaoLicencaAmbientalb 
    }

    if(values.dataDeValidadeLicencaAmbientalb == ''){
      values.dataDeValidadeLicencaAmbientalb = editando.pastaDeDocumentos.licencaAmbiental.dataDeValidadeLicencaAmbiental 
    }else{
      values.dataDeValidadeLicencaAmbientalb = values.dataDeValidadeLicencaAmbientalb 
    }

    if(values.tipoContratob == ''){
      values.tipoContratob = editando.pastaDeDocumentos.contratoDeImovel.tipoContrato 
    }else{
      values.tipoContratob = values.tipoContratob 
    }

    if(values.baixadab == ''){
      values.baixadab = editando.pastaDeDocumentos.declaracaoDeBaixaInscricao.baixada 
    }else{
      values.baixadab = values.baixadab 
    }

    if(values.enderecoSedeb == ''){
      values.enderecoSedeb = editando.dadosProfissionais.enderecoSede
    }else{
      values.enderecoSedeb = values.enderecoSedeb 
    }
    }
  

      const resposta = await Axios.post('http://'+ipatual+'/api/updateAssociate', values) 

      var result = resposta?.status 

      if(result == 200){
        openModalConfirmEdit()
      }else{
        window.alert("Erro")
      }



    
    }catch(error){
        console.log(error);
    }
    
    // Go to /some/path.
}

const [assc, setAssociate ] = useState([]);
const [count, setCount] = useState(0);

useEffect(() => {
  
  async function fetchData(){
    try{
      
    const resposta = await Axios.post('http://'+ ipatual +'/api/searchAssociate')
    setAssociate(resposta?.data)
    }catch(error){
      console.log(error);
    }
  };

  fetchData();

  // async function resultFake(){
  //   try{
  //     try{
      
  //       const resposta = await Axios.post('http://'+ ipatual +'/api/fakeResult')
  //       setEditando(resposta?.data);
  //       }catch(error){
  //         console.log(error);
  //       }
  
  //   }catch(err){
  //     console.log("Result Fake Error " + errr)
  //   }
  // }

  // resultFake();

}, []);

  // fetchData();


// void async function editAssociate(){
//   try{
    
//   const resposta = await Axios.get('http://'+ ipatual +'/api/edit', values)
//   setAssociate(resposta?.data)

//   }catch(error){
//     console.log(error);
//   }
// }()

const [deletado, setDeletado ] = useState([]);
const [clicko, setClicko ] = useState(false);

    // Go to /some/path.
  const reload = ()=>{
    window.location.reload();
  }

  const deleteAssociate = async(value) => {
    console.log("Apertou " + value + " pra deletar")
    try{ 
      console.log("Try")
      values.associateIdb = value;
      const resposta = await Axios.post('http://'+ ipatual +'/api/deleteAssociate', values).then(
      window.location.reload()
      )
    }catch(error){
      console.log(error);
    }
  };


  const [simBaixa, setSimBaixa] = useState(false);

  var result = "";
  async function editingAssociate(value){
    try{ 
      console.log("Try")
      values.associateIdb = value;
      const resposta = await Axios.post('http://'+ ipatual +'/api/editAssociate', values);
      result = resposta?.data    
    }catch(error){
      console.log(error);
    }
    await setEditando(result)
    console.log(result)
    setClicko(true);
              var baixadoI = result.pastaDeDocumentos.declaracaoDeBaixaInscricao.baixada;
              if(baixadoI == "N??o"){
                console.log("Foi N??O")
                setSimBaixa(false)
              }else{
                console.log("Foi SIM")
                setSimBaixa(true)
              }
    // contrato()
  };


  const editAssociate = async(value) => {
    console.log("Apertou " + value + " pra editar.")
    console.log(editando)
    console.log("Passou")
    
  };

  const [editing, setEditing] = useState([]);

async function getDeleteAssociate(value){
  var getAscValue = value;
  console.log("Deletar associado de id " + getAscValue)
  deleteAssociate(getAscValue);
}
async function getEditAssociate(value){
  let getAscValue = value;
  setEditing((prev) => !prev)
  console.log("Edit associado de id " + getAscValue)
  await editingAssociate(getAscValue);
}

const [deleting, setDeleting] = useState(false);

async function openModalDelete(id, nomeF){
  values.idDelete = id;
  values.nomeF = nomeF;
  setDeleting(true)
}
function closeModalDelete(){
  setDeleting(false)
}

const [confirmEditar, setConfirmEditar] = useState(false);
const [confirmEditarConfirm, setConfirmEditarConfirm] = useState(false);


function openModalEdit(id, nomeF){
  values.idDelete = id;
  values.nomeF = nomeF;
  setConfirmEditar(true)
}

function openModalConfirmEdit(){

  setConfirmEditarConfirm(true)

}
function closeModalConfirmEdit(){

  setConfirmEditarConfirm(false)

}

function closeModalEdit(){

  setConfirmEditar(false)

}


const valorBaixa = ()=>{
  var e = document.getElementById("baixa");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value)
  console.log(text)
  if(value=="sim"){
    values.baixadab = "Sim";
  }else if(value=="nao"){
    values.baixadab = "N??o";
  }else{

  }
}

const valorContrato = ()=>{
  var e = document.getElementById("contrato");
  var value = e.value;
  var text = e.options[e.selectedIndex].text;
  console.log(value)
  console.log(text)
  if(value=="arrendamento"){
    values.contratob = "Arrendamento";
  }else if(value=="compraevenda"){
    values.contratob = "Compra e venda";
  }else if(value=="locacao"){
    values.contratob = "Loca????o";
  }else if(value=="aluguel"){
    values.contratob = "Aluguel";
  }else if(value=="comodato"){
    values.contratob = "Comodato";
  }else{

  }
}


return(

<div className="mx-auto">
{deleting && (

<div id="popup-modal" tabindex="1" class="App3 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="fixed w-full h-full max-w-xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => closeModalDelete()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Fechar</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-white dark:text-white">Tem certeza que deseja deletar empresa <b>&quot;{values.nomeF}&quot;</b>?</h3>
                <button onClick={() => getDeleteAssociate(values.idDelete)} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Sim, deletar
                </button>
                <button onClick={() => closeModalDelete()} data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">N??o, cancelar</button>
            </div>
        </div>
    </div>
</div>

)
}

<div className="flex flex-col">
  <div className={editing ? "show" : "hidden"}>

  <div className="w-screen sm:-mx-6 lg:-mx-8">
    <div className="py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
          <table className="tg min-w-screen">
            <thead className="min-w-screen">
              <tr>
                <th scope="col" className="tg-k4e5 w-10 text-sm font-medium text-white px-6 py-4 text-left">
                  ID
                </th>
                <th scope="col" className="tg-k4e5 w-10 text-sm font-medium text-white px-6 py-4 text-left">
                  N??mero da Pasta
                </th>
                <th scope="col" className="tg-k4e5 w-72 text-sm font-medium text-white px-6 py-4 text-left">
                  Nome Completo
                </th>
                <th scope="col" className="tg-k4e5 w-72 text-sm font-medium text-white px-6 py-4 text-left">
                 Raz??o Social
                </th>
                <th scope="col" className="tg-k4e5 w-8 text-sm font-medium text-white px-6 py-4 text-left">
                 Editar
                </th>
                <th scope="col" className="tg-k4e5 w-8 text-sm font-medium text-white px-6 py-4 text-left">
                 Deletar
                </th>
              </tr>
            </thead>
          <tbody>
            {assc.map((ascData, index) => {
              return (
                <tr key={index} className="group bg-assemiperBlack font-bold border-b break-all transition duration-300 ease-in-out hover:bg-red-700">
                  <td className="tg-dg7a group-hover:bg-slate-200 px-6 py-4 text-sm font-bold text-white">{ascData.associateId}</td>
                  <td className="tg-dg7a group-hover:bg-slate-200 px-6 py-4 text-sm font-light text-white">{ascData.numeroDaPasta}</td>
                  <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l break-all font-light px-6 py-4"><p className="break-all">{ascData.dadosPessoais?.nomeCompleto}</p></td>
                  <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.razaoSocial}</td>
                  <td className=" group-hover:bg-slate-200 text-center tg-dg7a"><button name="editAsc" onClick={() => getEditAssociate(ascData._id)}  className="transition ease-in duration-100 cursor-pointer text-xl w-6 hover:scale-125 text-blue-500 hover:text-blue-600  rounded-xl bi bi-pencil"></button></td>
                  <td className=" group-hover:bg-slate-200 text-center tg-dg7a"><button name="deleteAsc" onClick={() => openModalDelete(ascData._id, ascData.dadosProfissionais.nomeFantasia)} className="deleteAsc transition ease-in duration-100 cursor-pointer text-red-500 hover:text-red-700 text-xl w-6 hover:scale-150 rounded-xl"><i className="bi bi-trash"></i></button></td>
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

{!clicko && <p></p>}
{clicko && (
  <div className="show bg-assemiperBlack">
  <div className="App bg-assemiperBlack">
  <button onClick={reload} className="m-5 group hover:scale-110 bg-red-800 hover:bg-red-700 transition ease-in-out duration-150 relative flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
    Voltar
  </button>
  <form  action="#" onSubmit={onSubmit} method="POST" className="block p-4 rounded-lg justify-self-center mx-auto shadow-2xl bg-assemiperBlack min-w-screen">

  <div className="mb-5">
  <h1 className="text-2xl text-center text-white font-bold">Dados Pessoais</h1>
  </div>


  
  <div className="grid grid-cols-3 gap-6">
  
  <div className="col-span-3">
    <label htmlFor="nomeCompletoI" className="form-label inline-block mb-2 text-white">Nome completo</label>
    <input type="text"
      name="nomeCompletob"
      required
      defaultValue={editando.dadosPessoais.nomeCompleto}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="nomeCompletoI"
      onChange={onChange}
      placeholder="Nome Completo"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="estadoCivilI" className="form-label inline-block mb-2 text-white">Estado Civil</label>
    <input type="text"
      name="estadoCivilb"
      required
      defaultValue={editando.dadosPessoais.estadoCivil}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="estadoCivilI"
      onChange={onChange}
      placeholder="Estado Civil"
    />
  </div>
  
  
  <div className="col-span-3">
    <label htmlFor="nacionalidadeI" className="form-label inline-block mb-2 text-white">
      Nacionalidade</label>
      <input type="text"
         name="nacionalidadeb"
         required
  defaultValue={editando.dadosPessoais.nacionalidade}
         className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
         id="nacionalidadeI"
         onChange={onChange}
         placeholder="Nacionalidade"
       />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="naturalidadeI" className="form-label inline-block mb-2 text-white">
    Naturalidade</label>
    <input type="text"
       name='naturalidadeb'
       required
  defaultValue={editando.dadosPessoais.naturalidade}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="naturalidadeI"
       onChange={onChange}
       placeholder="Naturalidade"
     />
  </div> 
  
  
  
  <div className="col-span-3">
  <label htmlFor="dataDeNascimentoI" className="form-label inline-block mb-2 text-white">
    Data de Nascimento</label>
    <input type="date"
       name="dataDeNascimentob"
       max="2004-12-12"
       min="1910-05-01"
       required
       defaultValue={editando.dadosPessoais.dataDeNascimento}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="dataDeNascimentoI"
       onChange={onChange}
       placeholder="Data de Nascimento"
     />
  </div>
  
  <div className="col-span-2">
  <label htmlFor="cpfI" className="form-label inline-block mb-2 text-white">
  CPF</label>
        <InputMask
        className="form-control bg-white block w-full px-3 py-1.5 text-lg text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        mask='999.999.999-99'
        id="cpfI"
        name="cpfb"
        defaultValue={editando.dadosPessoais.cpf}
        placeholder='CPF'
        onChange={onChange}
    />
</div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="profissaoI" className="form-label inline-block mb-2 text-white">
    Profiss??o</label>
    <input type="text"
       name="profissaob"
       required
  defaultValue={editando.dadosPessoais.profissao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="profissaoI"
       onChange={onChange}
       placeholder="Profiss??o"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="documentoIdentificacaoI" className="form-label inline-block mb-2 text-white">
    Documento de identifica????o</label>
    <input type="text"
       name="documentoIdentificacaob"
       required
  defaultValue={editando.dadosPessoais.documentoIdentificacao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="documentoIdentificacaoI"
       onChange={onChange}
       placeholder="Doc. de Identifica????o"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="numeroDocumentoI" className="form-label inline-block mb-2 text-white">
    N?? do Documento</label>
    <input type="text"
       name="numeroDocumentob"
       required
  defaultValue={editando.dadosPessoais.numeroDocumento}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroDocumentoI"
       onChange={onChange}
       placeholder="N??mero do Documento"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="orgaoExpeditorI" className="form-label inline-block mb-2 text-white">
    Org??o Expeditor</label>
    <input type="text"
       name="orgaoExpeditorb"
       required
  defaultValue={editando.dadosPessoais.orgaoExpeditor}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="orgaoExpeditorI"
       onChange={onChange}
       placeholder="Org??o Expeditor"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="enderecoPessoalI" className="form-label inline-block mb-2 text-white">
    Endere??o</label>
    <input type="text"
       name="enderecoPessoalb"
       required
  defaultValue={editando.dadosPessoais.enderecoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="enderecoPessoalI"
       onChange={onChange}
       placeholder="Endere??o Pessoal"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="numeroEnderecoPessoalI" className="form-label inline-block mb-2 text-white">
    N?? Endere??o</label>
    <input type="text"
       name="numeroEnderecoPessoalb"
       required
  defaultValue={editando.dadosPessoais.numeroEnderecoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroEnderecoPesssoalI"
       onChange={onChange}
       placeholder="N??mero Endere??o"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="complementoPessoalI" className="form-label inline-block mb-2 text-white">
    Complemento</label>
    <input type="text"
       name="complementoPessoalb"
       required
  defaultValue={editando.dadosPessoais.complementoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="complementoPessoalI"
       onChange={onChange}
       placeholder="Complemento Endere??o"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="bairroPessoalI" className="form-label inline-block mb-2 text-white">
    Bairro</label>
    <input type="text"
       name="bairroPessoalb"
       required
  defaultValue={editando.dadosPessoais.bairroPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="bairroPessoalI"
       onChange={onChange}
       placeholder="Bairro"
     />
  </div>

<div className="col-span-2">
<label htmlFor="cepI" className="form-label inline-block mb-2 text-white">
  CEP</label>
        <InputMask
        className="form-control bg-white block w-full px-3 py-1.5 text-lg text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        mask='99999-99'
        id="cepI"
        required
        name="cepb"
        defaultValue={editando.dadosPessoais.cep}
        placeholder='CEP'
        onChange={onChange}
    />
</div>
  
  <div className="col-span-3">
  <label htmlFor="cidadeEstadoPessoalI" className="form-label inline-block mb-2 text-white">
    cidade e estado pessoal</label>
    <input type="text"
       name="cidadeEstadoPessoalb"
       required
        defaultValue={editando.dadosPessoais.cidadeEstadoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cidadeEstadoPessoalI"
       onChange={onChange}
       placeholder="Cidade e estado pessoal"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="emailPessoalI" className="form-label inline-block mb-2 text-white">
    e-mail pessoal</label>
    <input type="email"
       name="emailPessoalb"
       required
      defaultValue={editando.dadosPessoais.emailPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="emailPessoalI"
       onChange={onChange}
       placeholder="E-mail pessoal"
     />
  </div>
  
<div className="col-span-2">
<label htmlFor="telefoneFixoPessoalI" className="form-label inline-block mb-2 text-white">
  Telefone fixo pessoal</label>
  <InputMask
    defaultValue={editando.dadosPessoais.telefoneFixoPessoal}
      className="form-control bg-white block w-full px-3 py-1.5 text-lg  text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='(99)99999-9999'
      id="telefoneFixoPessoalI"
      name="telefoneFixoPessoalb"
      placeholder='(XX) XXXXX-XXXX ou N/A'
      onChange={onChange}
      required
  />
</div>
  
  <div className="col-span-3">
<label htmlFor="celularPessoalI" className="form-label inline-block mb-2 text-white">
  Celular pessoal</label>
  <InputMask
     defaultValue={editando.dadosPessoais.celularPessoal}
      required
      className="form-control bg-white block w-full px-3 py-1.5 text-lg  text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='(99) 99999-9999'
      id="celularPessoalI"
      name="celularPessoalb"
      placeholder='(XX) XXXXX-XXXX'
      onChange={onChange}
  />
</div>
  <br></br>


  
  
  <div className="mb-5">
  <h1 className="text-white font-bold p-5 font-white text-center text-2xl whitespace-nowrap">Dados Profissionais</h1>
  </div>
  
  <div className="col-span-3">
  <label htmlFor="razaoSocialI" className="form-label inline-block mb-2 text-white">
    Raz??o Social</label>
    <input type="text"
       name="razaoSocialb"
       required
        defaultValue={editando.dadosProfissionais.razaoSocial}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="razaoSocialI"
       onChange={onChange}
       placeholder="Raz??o social"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="nomeFantasiaI" className="form-label inline-block mb-2 text-white">
    Nome Fantasia</label>
    <input type="text"
       name="nomeFantasiab"
       required
        defaultValue={editando.dadosProfissionais.nomeFantasia}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="nomeFantasiaI"
       onChange={onChange}
       placeholder="Nome fantasia"
     />
  </div>
  

  <div className="col-span-2">
<label htmlFor="cnpjI" className="form-label inline-block mb-2 text-white">
  CNPJ</label>
     <InputMask
       defaultValue={editando.dadosProfissionais.cnpj}
      className="form-control bg-white block w-full px-3 py-1.5 text-lg  text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='999.999.999/9999-99'
      id="cnpjI"
      name="cnpjb"
      placeholder='000.000.000/0000-00'
      onChange={onChange}
  />
</div>
  
  <div className="col-span-3">
  <label htmlFor="numeroInscricaoI" className="form-label inline-block mb-2 text-white">
    N??mero de Inscri????o Estadual</label>
    <input type="text"
       name="numeroInscricaob"
       required
  defaultValue={editando.dadosProfissionais.numeroInscricao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroInscricaoI"
       onChange={onChange}
       placeholder="N??mero de inscri????o"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="enderecoSedeI" className="form-label inline-block mb-2 text-white">
    Endere??o Sede</label>
    <input type="text"
       name="enderecoSedeb"
       required
  defaultValue={editando.dadosProfissionais.enderecoSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="enderecoSedeI"
       onChange={onChange}
       placeholder="Endere??o sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="numeroSedeI" className="form-label inline-block mb-2 text-white">
    N??mero Sede</label>
    <input type="text"
       name="numeroSedeb"
       required
  defaultValue={editando.dadosProfissionais.numeroSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroSedeI"
       onChange={onChange}
       placeholder="N??mero sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="complementoSedeI" className="form-label inline-block mb-2 text-white">
    Complemento Sede</label>
    <input type="text"
       name="complementoSedeb"
       required
  defaultValue={editando.dadosProfissionais.complementoSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="complementoSedeI"
       onChange={onChange}
       placeholder="Complemento sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="bairroSedeI" className="form-label inline-block mb-2 text-white">
    Bairro Sede</label>
    <input type="text"
       name="bairroSedeb"
       required
  defaultValue={editando.dadosProfissionais.bairroSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="bairroSedeI"
       onChange={onChange}
       placeholder="Bairro sede"
     />
  </div>

  <div className="col-span-3">
<label htmlFor="cepSedeI" className="form-label inline-block mb-2 text-white">
  CEP Sede</label>
  <InputMask
      defaultValue={editando.dadosProfissionais.cepSede}
      className="form-control bg-white block w-full px-3 py-1.5 text-lg  text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='99999-999'
      id="cepSedeI"
      name="cepSedeb"
      placeholder='CEP'
      onChange={onChange}
  />
</div>
  
  <div className="col-span-3">
  <label htmlFor="cidadeEstadoSedeI" className="form-label inline-block mb-2 text-white">
    Cidade e Estado da Sede</label>
    <input type="text"
       name="cidadeEstadoSedeb"
       required
  defaultValue={editando.dadosProfissionais.cidadeEstadoSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cidadeEstadoSedeI"
       onChange={onChange}
       placeholder="Cidade e estado da sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="emailProfissionalI" className="form-label inline-block mb-2 text-white">
    Email Profissional</label>
    <input type="email"
       name="emailProfissionalb"
       required
  defaultValue={editando.dadosProfissionais.emailProfissional}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="emailProfissionalI"
       onChange={onChange}
       placeholder="Email profissional"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="dataDeAberturaI" className="form-label inline-block mb-2 text-white">
    Data de abertura</label>
    <input type="date"
       name="dataDeAberturab"
       required
       defaultValue={editando.dadosProfissionais.dataDeAbertura}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="dataDeAberturaI"
       onChange={onChange}
       placeholder="Data de Abertura"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="quantidadePessoasOcupadasI" className="form-label inline-block mb-2 text-white">
    Quantidade de Pessoas Ocupadas</label>
    <input type="text"
       name="quantidadePessoasOcupadasb"
       required
       defaultValue={editando.dadosProfissionais.quantidadePessoasOcupadas}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="quantidadePessoasOcupadasI"
       onChange={onChange}
       placeholder="Quantidade de pessoas ocupadas"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="ramoDaAtividadeI" className="form-label inline-block mb-2 text-white">
    Ramo da Atividade</label>
    <input type="text"
       name="ramoDaAtividadeb"
       required
  defaultValue={editando.dadosProfissionais.ramoDaAtividade}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="ramoDaAtividadeI"
       onChange={onChange}
       placeholder="Ramo da atividade"
     />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="numeroDaPastab" className="form-label inline-block mb-2 text-white">N??mero da Pasta</label>
    <input type="text"
      name="numeroDaPastab"
      required
      defaultValue={editando.numeroDaPasta}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="numeroDaPastaI"
      onChange={onChange}
      placeholder="N??mero da Pasta"
    />
  </div>
  
  <br></br>
  
  <div className="mb-5">
  <h1 className="text-white font-bold p-5 font-white text-center text-2xl whitespace-nowrap">Pasta de Documentos</h1>
  </div>
  
  <br></br>
  
  <h1 className="text-white text-center font-bold whitespace-nowrap">Alvar?? de Funcionamento - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="validadeAlvarab" className="form-label inline-block mb-2 text-white">Validade</label>
    <input type="text"
      name="validadeAlvarab"
      defaultValue={editando.pastaDeDocumentos.alvaraDeFuncionamento.validadeAlvara}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="validadeAlvaraI"
      onChange={onChange}
      placeholder="Validade Alvar??"
    />
  </div>
  <div className="col-span-3">
    <label htmlFor="areaM2Funcionamentob" className="form-label inline-block mb-2 text-white">
      ??rea M??
    </label>
    <input type="text"
      name="areaM2Funcionamentob"
      defaultValue={editando.pastaDeDocumentos.alvaraDeFuncionamento.areaM2Funcionamento}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="areaM2FuncionamentoI"
      onChange={onChange}
      placeholder="??rea M??"
    />
  </div>
  <div className="col-span-3">
    <label htmlFor="numeroInscricaoMunicipalb" className="form-label inline-block mb-2 text-white">
      N??mero da Inscri????o Municipal
    </label>
    <input type="text"
      name="numeroInscricaoMunicipalb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="numeroInscricaoMunicipalI"
      defaultValue={editando.pastaDeDocumentos.alvaraDeFuncionamento.numeroInscricaoMunicipal}
      onChange={onChange}
      placeholder="N??mero de Inscri????o Municipal"
    />
  </div>
  
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Certificado Conformidade Corpo de Bombeiros - </h1>
  
  <div className="col-span-3">
    <label htmlFor="dataDeEmissaoBombeirosb" className="form-label inline-block mb-2 text-white">
      Data de Emiss??o
    </label>
    <input type="date"
      name="dataDeEmissaoBombeirosb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeEmissaoBombeirosI"
      defaultValue={editando.pastaDeDocumentos.certificadoBombeiros.dataDeEmissaoBombeiros}
      onChange={onChange}
      placeholder="Data de Emiss??o"
    />
  </div>
  <div className="col-span-3">
    <label htmlFor="dataDeValidadeBombeirosb" className="form-label inline-block mb-2 text-white">
      Data de Validade
    </label>
    <input type="date"
      name="dataDeValidadeBombeirosb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeBombeirosI"
      defaultValue={editando.pastaDeDocumentos.certificadoBombeiros.dataDeValidadeBombeiros}
      onChange={onChange}
      placeholder="Data de Validade"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="areaM2Bombeirosb" className="form-label inline-block mb-2 text-white">
      ??rea M??
    </label>
    <input type="text"
      name="areaM2Bombeirosb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="areaM2BombeirosI"
      onChange={onChange}
      defaultValue={editando.pastaDeDocumentos.certificadoBombeiros.areaM2Bombeiros}
      placeholder="??rea M??"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Alvar?? de Vigil??ncia Sanit??ria - </h1>
  
  <div className="col-span-3">
    <label htmlFor="dataDeValidadeVigilanciab" className="form-label inline-block mb-2 text-white">
      Data de Validade da Vigil??ncia Sanit??ria
    </label>
    <input type="date"
      name="dataDeValidadeVigilanciab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeVigilanciaI"
      onChange={onChange}
      defaultValue={editando.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.dataDeValidadeVigilancia}
      placeholder="Data de Validade"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="inscricaoVigilanciaSanitariab" className="form-label inline-block mb-2 text-white">
      Inscri????o Vigil??ncia Sanit??ria
    </label>
    <input type="text"
      name="inscricaoVigilanciaSanitariab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="inscricaoVigilanciaSanitariaI"
      defaultValue={editando.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.inscricaoVigilanciaSanitaria}
      onChange={onChange}
      onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
      placeholder="Inscri????o Vigil??ncia Sanit??ria"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Licen??a Ambiental - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="dataDeEmissaoLicencaAmbientalb" className="form-label inline-block mb-2 text-white">
      Data de Emiss??o
    </label>
    <input type="date"
      name="dataDeEmissaoLicencaAmbientalb"
      defaultValue={editando.pastaDeDocumentos.licencaAmbiental.dataDeEmissaoLicencaAmbiental}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeEmissaoLicencaAmbientalI"
      onChange={onChange}
      placeholder="Data de Emiss??o da Licen??a Ambiental"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="dataDeValidadeLicencaAmbientalb" className="form-label inline-block mb-2 text-white">
      Data de Validade da Licen??a Ambiental
    </label>
    <input type="date"
      name="dataDeValidadeLicencaAmbientalb"
      defaultValue={editando.pastaDeDocumentos.licencaAmbiental.dataDeValidadeLicencaAmbiental}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeLicencaAmbientalI"
      onChange={onChange}
      placeholder="Data de Validade da Licen??a Ambiental"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Contrato de Im??vel - </h1>
  
  
  {/* <div className="col-span-3">
    <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
      Tipo de Contrato
    </label>
    <input type="text"
      name="tipoContratob"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="tipoContratoI"
      defaultValue={editando.pastaDeDocumentos.contratoDeImovel.tipoContrato}
      onChange={onChange}
      placeholder="Tipo de Contrato"
    />
  </div> */}

<div className="col-span-3">
  <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
    Tipo de Contrato
  </label>
      <select onChange={valorContrato} id="contrato" className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none" name="select">
      <option value="comodato">Comodato</option>
      <option value="arrendamento">Arrendamento</option>
      <option value="compraevenda">Compra e Venda</option>
      <option value="aluguel">Aluguel</option>
      <option value="locacao">Loca????o</option>
    </select>
</div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Declara????o de Baixa de Inscri????o Municipal  - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="baixadab" className="form-label inline-block mb-2 text-white">
      Baixada
    </label>

  {!simBaixa ?
  (<select id="baixa" className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" name="select" onChange={valorBaixa}>
    <option value="sim" >Sim</option>
    <option value="nao" selected>N??o</option>
  </select>
  )
  :
  (
  <select id="baixa" className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" name="select" onChange={valorBaixa}>
    <option value="sim" selected>Sim</option>
    <option value="nao" >N??o</option>
  </select>
  )
  }

  </div>
  
  
  {confirmEditarConfirm && (

<div id="popup-modal" tabindex="2" class="App3 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-50 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="fixed w-full h-full max-w-xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={reload} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Fechar</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-white dark:text-white">Editado com Sucesso.</h3>
                <button data-modal-toggle="popup-modal" onClick={reload} class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Ok
                </button>
            </div>
        </div>
    </div>
</div>

)
}
  
  {confirmEditar && (

<div id="popup-modal" tabindex="1" class="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div class="fixed w-full h-full max-w-xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => closeModalEdit()} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Fechar</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-white dark:text-white">Confirmar edi????o?</h3>
                <button data-modal-toggle="popup-modal" type="submit" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Sim, editar
                </button>
                <button onClick={() => closeModalEdit()} data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">N??o, cancelar</button>
            </div>
        </div>
    </div>
</div>

)
}
  <div className="col-span-3 p-5">
          <div onClick={() => openModalEdit()} className="group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
                <g>
                <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
                <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
                </g>
                </svg>
  
              </span>
              <h2 className="text-white font-bold">CONCLUIR EDI????O</h2>
          </div>
    </div>
  </div>
  </form>
  
  </div>
  </div>
)}

</div>
</div>
)
}

function Card(props){
  return (
    <div>
      <table className="table-fixed bg-white text-black">
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