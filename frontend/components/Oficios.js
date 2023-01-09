import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {ipatual} from './ip.js';
import moment from 'moment';
require('moment/locale/pt-br');
// import $ from 'jquery';


function App() {

  const options = [
    { value: 'SIM', label: 'SIM', name:'baixadab' },
    { value: 'NÃO', label: 'NÃO', name:'baixadab' },
  ]

  var dataFormatada = moment()
  var dataFinal = dataFormatada.format('LLLL')

  const initialValue = {
    o_id: "",
    numeroOficiob: "",
    dataDeExpedicaob: "",
    estadoOficiob: "",
    senhaSeguranca: "",
  }

  const [values, setValues] = useState(initialValue);

  function onChange(ev) {

  const {name, value} = ev.target;

  console.log({name, value});
  
  setValues({ ...values, [name]: value });
  
};

const onSubmit = async(ev) => {

  setConfirmRegistro(false)
          
  ev.preventDefault();

  console.log(values)

  try{

      const resposta = await Axios.post('http://'+ipatual+'/api/registerOficio', values);

      var result = resposta?.status;

      if(result == 200){
        window.location.reload()
      }
    
    }catch(error){
        console.log(error);
    }
    
    // Go to /some/path.
}

const salvarResumo = async(value) => {

  setConfirmRegistro(false)
          
  console.log(values)

  values.r_id = value;

  try{

    if(1==1){
        if(values.r_id == ''){
          values.r_id = dados._id;
        }else{
          values.r_id = values.r_id;
        }

        if(values.temaReuniaob == ''){
          values.temaReuniaob = dados.temaReuniao;
        }else{
          values.temaReuniaob = values.temaReuniaob;
        }

        if(values.dataDaReuniaob == ''){
          values.dataDaReuniaob = dados.dataDaReuniao;
        }else{
          values.dataDaReuniaob = values.dataDaReuniaob;
        }

        if(values.horarioReuniaob == ''){
          values.horarioReuniaob = dados.horarioReuniao;
        }else{
          values.horarioReuniaob = values.horarioReuniaob;
        }

        if(values.convidadosReuniaob == ''){
          values.convidadosReuniaob = dados.convidadosReuniao;
        }else{
          values.convidadosReuniaob = values.convidadosReuniaob ;
        }
      }

      const resposta = await Axios.post('http://'+ipatual+'/api/updateReuniao', values);

      var result = resposta?.status;

      if(result == 200){
        window.location.reload()
      }
    
    }catch(error){
        console.log(error);
    }
    
    // Go to /some/path.
}

const [cpfH, setCPF] = useState('');
const [cnpjH, setCNPJ] = useState('');
const [npH, setNP] = useState('');
const [nsH, setNS] = useState('');

const handleInputCPF = ({ target: { value } }) => {
  setCPF(value)
};


function testeInfo(ev){
  ev.preventDefault();
  values.nomeCompletob = "teste";
  values.estadoCivilb = "teste";
}

const [confirmRegistro, setConfirmRegistro] = useState(false);

function openModalConfirm(){

  setConfirmRegistro(true)

}

function closeModalConfirm(){

  setConfirmRegistro(false)

}

function onlyNumbers(e) {
  setTagInputVal(e.target.value.replace(/[^0-9]/g, ""));
}

const handleChangeBaixa = (selected) => {
  var baixa = this.setState({ [selected.name]: selected.value })
  console.log(baixa)
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
    values.baixadab = "Não";
  }else{

  }
}

const [agendando, setAgendando] = useState(false);
const [visualizando, setVisualizar] = useState(false);

function agendarModal(){

  setAgendando(true)

}

function desagendarModal(){

  setAgendando(false)

}

function visualizarModal(){

  setVendoDados(true)

}

function fecharVisualizarModal(){

  setVendoDados(false)

}

const [vendoDados, setVendoDados ] = useState(false);

const [dados, setDados] = useState([]);
var result = "";

async function dataReunioes(value){
  try{ 
    console.log("Try")
    values.o_id = value;
    values.reuniaoId = value;
    const resposta = await Axios.post('http://'+ ipatual +'/api/getOficio', values);
    result = resposta?.data  
  }catch(error){
    console.log(error);
  }
  await setDados(result)
  setVendoDados(true)
  console.log(result)
  
};

const [editing, setEditing] = useState([]);

async function getDados(value){
  let getAscValue = value;
  setEditing((prev) => !prev)
  console.log("Edit associado de id " + getAscValue)
  await dataReunioes(getAscValue);
}

// const reload = ()=>{
//   window.location.reload();
// }

const [deletarReuniaoModal, setDeletarReuniaoModal] = useState(false);

async function deletarReuniaoA(){

  setDeletarReuniaoModal(true)

}

const [senhaErradaModal, setSenhaErradaModal] = useState(false);


const deletarOficio = async(value) => {

  if(values.senhaSeguranca == "micro130716"){

    values.o_id = value;
    console.log("Apertou " + value + " pra deletar")
    try{ 
        console.log("Try")
        values._id = value;
        const resposta = await Axios.post('http://'+ ipatual +'/api/deleteOficio', values).then(
        window.location.reload()
        )
    }catch(error){
        console.log(error);
    }

  }else{
    setSenhaErradaModal(true)
  }
};

const editarEstadoOficio = async() => {
    if(1 == 1){
        if(values.numeroOficiob == ""){
          values.numeroOficiob = dados.numeroOficio
        }else{
          values.numeroOficiob = values.numeroOficiob
        }
        if(values.dataDeExpedicaob == ""){
            values.dataDeExpedicaob = dados.dataDeExpedicao
          }else{
            values.dataDeExpedicaob = values.dataDeExpedicaob
          }
        if(values.estadoOficiob == ""){
            values.estadoOficiob = dados.estadoOficio
        }else{
            values.estadoOficiob = values.estadoOficiob
        }
    }

    try{

        const resposta = await Axios.post('http://'+ipatual+'/api/updateOficio', values) 

        var result = resposta?.status

        if(result == 200){
            window.location.reload()
        }
  
      
      }catch(error){
          console.log(error);
      }

}

const valorEstado = ()=>{
        var e = document.getElementById("estado");
        var value = e.value;
        var text = e.options[e.selectedIndex].text;
        console.log(value)
        console.log(text)
        if(value=="enviado"){
          values.estadoOficiob = "Enviado";
        }else if(value=="pendente"){
          values.estadoOficiob = "Pendente";
        }else if(value=="recebido"){
          values.estadoOficiob = "Recebido";
        }else if(value=="respondido"){
          values.estadoOficiob = "Respondido";
        }else{
      
        }
}
    

function showReq(){
  window.alert();
}

const [reunas, setReunioes ] = useState([]);

useEffect(() => {
  
  async function fetchData(){
    try{
      
    const resposta = await Axios.post('http://'+ ipatual +'/api/searchOficios')
    setReunioes(resposta?.data)
    }catch(error){
      console.log(error);
    }
  };

  fetchData();

}, []);

const [deletarOficioModal, setDeletarOficioModal] = useState(false);

function deletarOficioAbrir(){
    setDeletarOficioModal(true)
}
function deletarOficioFechar(){
    setDeletarOficioModal(false)
}



return(


<div className="">

{/* <form  action="#" onSubmit={onSubmit} method="POST" className="flex p-4 rounded-lg justify-self-center mx-auto shadow-2xl bg-assemiperBlack">
<div className="col-span-3">
        <button type="submit" className="group bg-assemiperBlack relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
              <g>
              <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
              <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
              </g>
              </svg>

						</span>
					  <h2 className="text-white" onClick={testeInfo}>REGISTRO TESTE</h2>
				</button>
  </div>
</form> */}
{!vendoDados && <p></p>}
{vendoDados && (
  <>

<form autocomplete="off" action="#" method="POST" className="flex absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center rounded-lg justify-self-center m-auto w-full h-screen  shadow-2xl bg-assemiperBlack bg-opacity-80">

<div className="m-auto bg-assemiperBlack p-5 rounded-xl bg-opacity-90">

  <div className="mb-2 whitespace-normal">
  <h1 className="text-xl text-center text-white font-semibold">Ofício</h1>
  </div>
  <div className="mb-5 bg-assemiperRed p-0.5 px-5 text-center"></div>
  <div className="grid grid-cols-4 min-w-18 max-w-screen gap-x-30 gap-y-5">

  <div className="col-span-4">
    <label htmlFor="temaReuniaoI" className="form-label font-bold inline-block mb-2 text-white">
      Número do Ofício</label>
    <input type="text"
      name="temaReuniaob"
      defaultValue={dados.numeroOficio}
      disabled
      className="text-center form-control block w-full px-32 py-1.5 text-lg font-semibold text-assemiperBlack bg-gray-300 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      id="temaReuniaoI"
      onChange={onChange}
      placeholder="Tema"
    />
  </div>


  <div className="col-span-4">
    <label htmlFor="dataDeExpedicaoI" className="mx-auto form-label font-bold inline-block mb-2 text-white">
      Data de Expedição</label>
    <input type="text"
      name="dataDeExpedicaob"
      defaultValue={dados.dataDeExpedicao.charAt(8)+
        dados.dataDeExpedicao.charAt(9)
        +"/"+
        dados.dataDeExpedicao.charAt(5)+
        dados.dataDeExpedicao.charAt(6)
        +"/"+
        dados.dataDeExpedicao.charAt(0)+
        dados.dataDeExpedicao.charAt(1)+
        dados.dataDeExpedicao.charAt(2)+
        dados.dataDeExpedicao.charAt(3)}
      disabled
      className="form-control text-center mx-auto block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-gray-300 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeExpedicaoI"
      onChange={onChange}
      placeholder="Data de Expedição"
    />
  </div>

  <div className="col-span-4">
    <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
        Estado do Ofício
    </label>
        <select onChange={valorEstado} required id="estado" className="text-left block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none" name="select">
            <option value="enviado">Enviado</option>
            <option value="recebido">Recebido</option>
            <option value="pendente">Pendente</option>
            <option value="respondido">Respondido</option>
        </select>
    </div>


  {/* <div className="col-span-4">
  <label htmlFor="presentesReuniaoI" className="form-label font-bold inline-block mb-2 text-white">
    Presentes</label>
    <textarea type="text"
      rows="2"
      name="presentesReuniaob"
      defaultValue={dados.presentesReuniao}
      className="form-control text-center block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      id="presentesReuniaoI"
      onChange={onChange}
      placeholder=""
    />
  </div> */}

  {deletarOficioModal && (

  <div id="popup-modal" tabIndex="1" className="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="fixed w-full h-full max-w-xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button onClick={() => setDeletarOficioModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Fechar</span>
              </button>
              <div className="p-6 text-center">
                
                  <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Deseja realmente excluir essa reunião? (Ação Irreversível)</h3>
                  
                  <label htmlFor="senhaSegurancaI" className="form-label inline-block mb-2 text-white">
                    Senha de Segurança</label>
                <input type="password"
                    name="senhaSegurancab"
                    required
                    className="form-control text-center mx-auto block w-1/2 mb-4 px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="senhaSegurancaI"
                    onChange={onChange}
                    placeholder="Insira a senha"
                />

                  <button onClick={() => deletarOficio(dados._id)} data-modal-toggle="popup-modal" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Sim, deletar ofício.
                  </button>
                  <button onClick={() => setDeletarOficioModal(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
              </div>
          </div>
      </div>
  </div>

  )
  }


<div onClick={editarEstadoOficio} className="col-span-4">
          <div className="cursor-pointer group bg-red-600 hover:bg-red-900 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              </span>
              <h2 className="cursor-pointer text-white">Salvar Ofício</h2>
          </div>
  </div>

<div onClick={deletarOficioAbrir} className="col-span-4">
          <div className="cursor-pointer group bg-red-600 hover:bg-red-900 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              </span>
              <h2 className="cursor-pointer text-white">Deletar Ofício</h2>
          </div>
  </div>

{/* <div className="col-span-4">
          <div className="cursor-pointer group bg-black hover:bg-red-900 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              </span>
              <h2 className="cursor-pointer text-white">Imprimir ///</h2>
          </div>
  </div> */}

  <div className="col-span-4">
          <div onClick={() => setVendoDados(false)} className="cursor-pointer group bg-red-800 hover:bg-red-500 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">

              </span>
              <h2 className="cursor-pointer text-white">Fechar</h2>
          </div>
  </div>


  
  
  </div>

</div>
</form>
</>
)}

{agendando && (

<>

  <form action="#" method="POST" className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center p-4 rounded-lg justify-self-center m-auto w-screen h-screen  shadow-2xl bg-assemiperBlack bg-opacity-60">

  <div className="fixed p-5">
    <button onClick={desagendarModal} className="rounded-xl text-2xl w-16 bg-assemiperRed h-10">
      Sair
    </button>
  </div>

  <div className="m-auto">

    <div className="mb-5 whitespace-normal">
    <h1 className="text-xl text-center text-white font-semibold">Importar Oficio</h1>
    </div>

    <div className="grid grid-cols-4 gap-x-10 gap-y-5">

    <div className="col-span-4">
      <label htmlFor="numeroOficioI" className="form-label inline-block mb-2 text-white">
        Número do Ofício</label>
      <input type="text"
        name="numeroOficiob"
        required
        className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        id="numeroOficioI"
        onChange={onChange}
        placeholder="Número do Ofício"
      />
    </div>

    <div className="col-span-4">
      <label htmlFor="dataDeExpedicaoI" className="form-label inline-block mb-2 text-white">
        Data de Expedição</label>
      <input type="date"
        name="dataDeExpedicaob"
        required
        max="2050-01-01"
        min="2010-01-01"
        className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        id="dataDeExpedicaoI"
        onChange={onChange}
        placeholder="Data de Expedição"
      />
    </div>

    <div className="col-span-4">
    <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
        Estado
    </label>
        <select onChange={valorEstado} required id="estado" className="text-left block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none" name="select">
            <option value="enviado">Enviado</option>
            <option value="recebido">Recebido</option>
            <option value="pendente">Pendente</option>
            <option value="respondido">Respondido</option>
        </select>
    </div>

    
{senhaErradaModal && (

<div>

<div id="popup-modal" tabIndex="1" className="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="fixed w-full h-full max-w-xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => closeModalConfirm()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Fechar</span>
            </button>
            <div className="p-6 text-center">
                <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Senha incorreta</h3>
                <button data-modal-toggle="popup-modal" type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Cancelar
                </button>
            </div>
        </div>
    </div>
</div>
    
</div>

)
}

{confirmRegistro && (

<div>


    
<div id="popup-modal" tabindex="1" class="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    {/* Nós é liso igual neymar */}
    <div class="fixed w-full h-full max-w-xl md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => setConfirmRegistro(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Fechar</span>
            </button>

            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-white dark:text-white">Confirmar registro de oficio?</h3>
                <div className="col-span-4">

                </div>
                <button onClick={onSubmit} data-modal-toggle="popup-modal" type="submit" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Sim, registrar
                </button>
                <button onClick={() => setConfirmRegistro(false)} data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
            </div>
        </div>
    </div>
</div>

</div>

)
}


    <div className="col-span-4 cursor-pointer">
            <div onClick={() => openModalConfirm()} className="group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
                  <g>
                  <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
                  <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
                  </g>
                  </svg>

                </span>
                <h2 className="cursor-pointer text-white">Concluir</h2>
            </div>
      </div>

    </div>

  </div>
  </form>
</>


)
}

{!agendando && (

<div className='bg-assemiper mt-12'>
 
    <div className="mx-auto">

      <div className="sm:-mx-6 lg:-mx-8">
        <div className="py-2 sm:px-6 lg:px-8">
          <div className="py-2">
          <div onClick={() => setAgendando(true)} className="mb-5 m-auto h-12 text-center w-1/3 cursor-pointer group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
                    <h2 className="cursor-pointer m-auto text-white text-center">Registrar Ofício</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="tg min-w-screen">
                  <thead className="min-w-screen">
                    <tr>
                      <th scope="col" className="tg-k4e5 w-48 text-md font-medium text-white px-6 py-4 text-left">
                        Número do Ofício
                      </th>
                      <th scope="col" className="tg-k4e5 w-64 text-md font-medium text-white px-6 py-4 text-left">
                        Data de Expedição
                      </th>
                      <th scope="col" className="tg-k4e5 w-52 text-md font-medium text-white px-6 py-4 text-left">
                        Estado
                      </th>
                      <th scope="col" className="tg-k4e5 w-52 text-md font-medium text-white px-6 py-4 text-left">
                        Detalhes
                      </th>
                    </tr>
                  </thead>
                <tbody>
                  {reunas.map((oficioData, index) => {
                    return (
                      <tr key={index} className="group whitespace-normal bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                        <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-4 text-md font-medium text-white">{oficioData.numeroOficio}</td>
                        <td className="tg-dg7a group-hover:bg-slate-300 text-md text-white border-l font-light px-6 py-4 whitespace-normal">{oficioData.dataDeExpedicao.charAt(8)+
        oficioData.dataDeExpedicao.charAt(9)
        +" / "+
        oficioData.dataDeExpedicao.charAt(5)+
        oficioData.dataDeExpedicao.charAt(6)
        +" / "+
        oficioData.dataDeExpedicao.charAt(0)+
        oficioData.dataDeExpedicao.charAt(1)+
        oficioData.dataDeExpedicao.charAt(2)+
        oficioData.dataDeExpedicao.charAt(3)}</td>
                        <td className="tg-dg7a group-hover:bg-slate-300 text-md text-white border-l font-light px-6 py-4 whitespace-normal">{oficioData.estadoOficio}</td>
                        <td className="tg-dg7a group-hover:bg-slate-300 text-md text-center text-white border-l font-light px-6 py-4 whitespace-normal">
                          <button onClick={() => getDados(oficioData._id)} className="transition ease-in duration-100 cursor-pointer text-xl w-12 group-hover:text-assemiperBlack hover:scale-150 rounded-xl">
                          <i className="bi bi-eye"></i>
                          </button>
                          </td>
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
</div>
)
}



</div>


)

}

export default App;

