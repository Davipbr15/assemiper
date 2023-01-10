import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {ipatual} from './ip.js';
import moment from 'moment';
require('moment/locale/pt-br');
import InputMask from 'react-input-mask';
// import $ from 'jquery';


function App() {

  var dataFormatada = moment()
  var dataFinal = dataFormatada.format('LLL')

  const initialValue = {
    bcj_id: "",
    razaoSocialBCJb: "",
    nomeFantasiaBCJb: "",
    cnpjBCJb: "",
    dataAtualBCJb: dataFinal,
    dataEnvioBCJb: "",

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

      const resposta = await Axios.post('http://'+ipatual+'/api/registerBCJ', values)

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

const [vendoDados, setVendoDados ] = useState(false);

const [dados, setDados] = useState([]);
var result = "";

async function dataReunioes(value){
  try{ 
    console.log("Try")
    values._id = value;
    values.bcj_id = value;
    const resposta = await Axios.post('http://'+ ipatual +'/api/getBCJ', values);
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
  console.log("Visualizar Dados " + getAscValue)
  await dataReunioes(getAscValue);
}

// const reload = ()=>{
//   window.location.reload();
// }

const [deletarReuniaoModal, setDeletarReuniaoModal] = useState(false);

const [deletarReuniaoModalA, setDeletarReuniaoModalA] = useState(false);

function deletarBCJB(value){
  values.bcj_id = value;

  setDeletarReuniaoModalA(true)
  
}

const deletarBCJ = async(value) => {

  values.bcj_id = value;

  console.log("Apertou " + value + " pra deletar")

  values._id = value;
  values.bcj_id = value;

  try{ 
    
    const resposta = await Axios.post('http://'+ ipatual +'/api/deleteBCJ', values);

    var result = resposta?.status;

    if(result == 200){
      window.location.reload()
    }

  }catch(error){
    console.log(error)
  }finally{
    console.log("Foi")
  }

};

const [cadastradosPF, setReunioes ] = useState([]);

useEffect(() => {
  
  async function fetchData(){
    try{
      
    const resposta = await Axios.post('http://'+ ipatual +'/api/searchBCJ')
    setReunioes(resposta?.data)
    }catch(error){
      console.log(error);
    }
  };

  fetchData();

}, []);

const [cadastrandoPF, setCadastrandoPF] = useState(false);



return(

    <div className="App">

      {cadastrandoPF && (
        
        <div>

        <form  action="#" method="POST" className="flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center p-4 rounded-lg justify-self-center m-auto w-screen h-screen  shadow-2xl bg-assemiperBlack bg-opacity-90">

        <div className="fixed p-5">
          <button onClick={() => setCadastrandoPF(false)} className="rounded-xl text-xl w-16 bg-assemiperRed h-10">
            SAIR
          </button>
        </div>

        <div className="m-auto bg-black p-5 rounded-md bg-opacity-70">

          <div className="mb-5 whitespace-normal">
          <h1 className="text-xl text-center text-white font-semibold">Cadastro Pessoa Física</h1>
          </div>

          <div className="grid grid-cols-4 gap-x-10 gap-y-5">

          <div className="col-span-4">
            <label htmlFor="razaoSocialBCJI" className="form-label inline-block mb-2 text-white">
              Razão Social</label>
            <input type="text"
              name="razaoSocialBCJb"
              required
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="razaoSocialBCJI"
              onChange={onChange}
              placeholder="Razão Social"
            />
          </div>

          <div className="col-span-4">
            <label htmlFor="nomeFantasiaBCJI" className="form-label inline-block mb-2 text-white">
              Nome Fantasia</label>
            <input type="text"
              name="nomeFantasiaBCJb"
              required
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="nomeFantasiaBCJI"
              onChange={onChange}
              placeholder="Nome Fantasia"
            />
          </div>

          <div className="col-span-2">
          <label htmlFor="cnpjBCJI" className="form-label inline-block mb-2 text-white">
            CNPJ</label>
              <InputMask
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              mask='999.999.999/9999-99'
              id="cnpjBCJI"
              name="cnpjBCJb"
              placeholder='CNPJ'
              onChange={onChange}
          />
          </div>

          <div className="col-span-2">
          <label htmlFor="dataEnvioBCJI" className="form-label inline-block mb-2 text-white">
            Data do Envio</label>
            <input type="date"
              name="dataEnvioBCJb"
              required
              max="2050-01-01"
              min="2010-01-01"
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dataEnvioBCJI"
              onChange={onChange}
              placeholder="Data de envio"
            />
          </div>

          {confirmRegistro && (

          <div id="popup-modal" tabIndex="1" className="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
              <div className="fixed w-full h-full max-w-xl md:h-auto">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button onClick={() => closeModalConfirm()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                          <span className="sr-only">Fechar</span>
                      </button>
                      <div className="p-6 text-center">
                          <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Confirmar Cadastro?</h3>
                          <button onClick={onSubmit} data-modal-toggle="popup-modal" type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                              Sim, registrar cadastro
                          </button>
                          <button onClick={() => closeModalConfirm()} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
                      </div>
                  </div>
              </div>
          </div>

          )
          }

          <div className="col-span-4">
                  <div onClick={() => openModalConfirm()} className="cursor-pointer group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
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

        </div>
          

      )
      }

      {vendoDados && (

      <div>

      <div action="#" method="POST" className="flex z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center text-center p-4 rounded-lg justify-self-center m-auto w-screen h-screen  shadow-2xl bg-assemiperBlack bg-opacity-90">

      <div className="m-auto bg-black p-5 rounded-md bg-opacity-70">

        <div className="mb-5 whitespace-normal">
        <h1 className="text-xl text-center text-white font-semibold">Cadastro Pessoa Física</h1>
        </div>

        <div className="grid grid-cols-4 gap-x-10 gap-y-5">
        <div className="col-span-4">
            <label htmlFor="razaoSocialBCJI" className="form-label inline-block mb-2 text-white">
              Razão Social</label>
            <input type="text"
              name="razaoSocialBCJb"
              disabled
              defaultValue={dados.razaoSocialBCJ}
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-slate-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="razaoSocialBCJI"
              onChange={onChange}
              placeholder="Razão Social"
            />
          </div>

          <div className="col-span-4">
            <label htmlFor="nomeFantasiaBCJI" className="form-label inline-block mb-2 text-white">
              Nome Fantasia</label>
            <input type="text"
              name="nomeFantasiaBCJb"
              disabled
              defaultValue={dados.nomeFantasiaBCJ}
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-slate-200  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="nomeFantasiaBCJI"
              onChange={onChange}
              placeholder="Nome Fantasia"
            />
          </div>

          <div className="col-span-2">
          <label htmlFor="cnpjBCJI" className="form-label inline-block mb-2 text-white">
            CNPJ</label>
              <input type="text"
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-slate-200  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              mask='999.999.999/9999-99'
              id="cnpjBCJI"
              disabled
              defaultValue={dados.cnpjBCJ}
              name="cnpjBCJb"
              placeholder='CNPJ'
              onChange={onChange}
          />
          </div>

          <div className="col-span-2">
          <label htmlFor="dataEnvioBCJI" className="form-label inline-block mb-2 text-white">
            Data do Envio</label>
            <input type="date"
              name="dataEnvioBCJb"
              disabled
              defaultValue={dados.dataEnvioBCJ}
              className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-slate-200  bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
              id="dataEnvioBCJI"
              onChange={onChange}
              placeholder="Data de envio"
            />
          </div>

          <div className="col-span-4">
          <label htmlFor="dataAtualBCJI" className="form-label inline-block mb-2 text-white">
            Data de Criação</label>
            <input type="text"
              name="dataAtualBCJb"
              disabled
              defaultValue={dados.dataAtualBCJ}
              className="form-control text-center block w-full px-3 py-1.5 text-lg font-semibold text-white bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              id="dataAtualBCJI"
              onChange={onChange}
              placeholder="Data Atual"
            />
          </div>

        {confirmRegistro && (

        <div id="popup-modal" tabIndex="1" className="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
            <div className="fixed w-full h-full max-w-xl md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button onClick={() => closeModalConfirm()} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Fechar</span>
                    </button>
                    <div className="p-6 text-center">
                        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Confirmar reunião?</h3>
                        <button onClick={onSubmit} data-modal-toggle="popup-modal" type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Sim, registrar cadastro
                        </button>
                        <button onClick={() => closeModalConfirm()} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
                    </div>
                </div>
            </div>
        </div>

        )
        }

        <div className="col-span-4">
                <div onClick={() => setVendoDados(false)} className="cursor-pointer group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
                      <g>
                      <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
                      <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
                      </g>
                      </svg>

                    </span>
                    <h2 className="cursor-pointer text-white">Fechar</h2>
                </div>
          </div>

        </div>

      </div>
      </div>

      </div>

      )
      }

      {!cadastrandoPF && (
      <div className="">

      {deletarReuniaoModalA && (

      <div id="popup-modal" tabIndex="1" className="App4 whitespace-nowrap flex h-screen justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-20 show p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
          <div className="fixed w-full h-full max-w-xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="p-6 text-center">
                      <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Deseja realmente excluir essa reunião? (Ação Irreversível)</h3>
                      <button onClick={() => deletarBCJ(values.bcj_id)} data-modal-toggle="popup-modal" type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                          Sim, deletar cadastro.
                      </button>
                      <button onClick={() => setDeletarReuniaoModalA(false)} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
                  </div>
              </div>
          </div>
      </div>

      )
      }

      <div className="sm:-mx-6 lg:-mx-8">

      <div className="py-2 sm:px-6 lg:px-8">
        <div className="py-2">

        <div onClick={()=> setCadastrandoPF(true)} className="mb-5 m-auto h-12 text-center w-1/3 cursor-pointer group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
                  <h2 className="cursor-pointer m-auto text-white text-center">CADASTRAR SERVIÇO</h2>
        </div>

          <div className="overflow-x-auto min-w-screen">

              <table className="tg min-w-screen">

                <thead className="min-w-screen">
                  <tr>
                    <th scope="col" className="tg-k4e5 w-64 text-sm font-medium text-white py-4 text-left">
                      Razão Social
                    </th>
                    <th scope="col" className="tg-k4e5 w-48 text-sm font-medium text-white px-2 py-4 text-left">
                      Nome Fantasia
                    </th>
                    <th scope="col" className="tg-k4e5 w-32 text-sm font-medium text-white px-6 py-4 text-left">
                      Data do Envio
                    </th>
                    <th scope="col" className="tg-k4e5 w-8 text-sm font-medium text-white px-6 py-4 text-left">
                    Visualizar Dados
                    </th>
                    <th scope="col" className="tg-k4e5 w-8 text-sm font-medium text-white px-6 py-4 text-left">
                    Deletar
                    </th>
                  </tr>
                </thead>
              <tbody>
                {cadastradosPF.map((cadastradosData, index) => {
                  return (
                    <tr key={index} className="group whitespace-normal bg-assemiperBlack font-bold border border-l transition duration-100 ease-in-out hover:bg-red-700">
                      <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-4 text-sm font-medium text-white">{cadastradosData.razaoSocialBCJ}</td>
                      <td className="tg-dg7a group-hover:bg-slate-300 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{cadastradosData.nomeFantasiaBCJ}</td>
                      <td className="tg-dg7a group-hover:bg-slate-300 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">
                        {cadastradosData.dataEnvioBCJ.charAt(8)+
                        cadastradosData.dataEnvioBCJ.charAt(9)
                        +"/"+
                        cadastradosData.dataEnvioBCJ.charAt(5)+
                        cadastradosData.dataEnvioBCJ.charAt(6)
                        +"/"+
                        cadastradosData.dataEnvioBCJ.charAt(0)+
                        cadastradosData.dataEnvioBCJ.charAt(1)+
                        cadastradosData.dataEnvioBCJ.charAt(2)+
                        cadastradosData.dataEnvioBCJ.charAt(3)
                        }
                        </td>
                      <td className="tg-dg7a group-hover:bg-slate-300 text-sm text-center text-white border-l font-light px-6 py-4 whitespace-normal">
                        <button onClick={() => getDados(cadastradosData._id)} className="transition ease-in duration-100 cursor-pointer text-xl w-12 group-hover:text-assemiperBlack hover:scale-150 rounded-xl">
                        <i className="bi bi-eye"></i>
                        </button>
                      </td>
                      <td className=" group-hover:bg-slate-300 text-center tg-dg7a"><button name="deleteAsc" onClick={() => deletarBCJB(cadastradosData._id)} className="deleteAsc transition ease-in duration-100 cursor-pointer text-red-500 hover:text-red-700 text-xl w-6 hover:scale-150 rounded-xl"><i className="bi bi-trash"></i></button></td>
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

    </div>
  )
}

export default App;