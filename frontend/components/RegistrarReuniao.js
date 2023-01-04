import React, { useEffect, useState } from 'react';
import Axios from "axios";
import {ipatual} from './ip.js';
import moment from 'moment';
require('moment/locale/pt-br');
// import $ from 'jquery';
import InputMask from 'react-input-mask';
import Select from 'react-select';


function App() {

  const options = [
    { value: 'SIM', label: 'SIM', name:'baixadab' },
    { value: 'NÃO', label: 'NÃO', name:'baixadab' },
  ]

  var dataFormatada = moment()
  var dataFinal = dataFormatada.format('LLLL')

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
    enderecoSedeb: '',
    cepSedeb: '',
    cidadeEstadoSedeb: '',
    emailProfissionalb: '',
    dataDeAberturab: '',
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
    dataCriacaob:dataFinal,
  }

  const [values, setValues] = useState(initialValue);

  function onChange(ev) {

  const {name, value} = ev.target;

  console.log({name, value});
  
  setValues({ ...values, [name]: value });
  
};

const onSubmit = async(ev) => {
          
  ev.preventDefault();

  console.log(values)

  try{

      const resposta = await Axios.post('http://'+ipatual+'/api/registerAssociate', values);

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
const handleInputCNPJ = ({ target: { value } }) => setCNPJ(value);
const handleInputNP = ({ target: { value } }) => setNP(value);
const handleInputNS = ({ target: { value } }) => setNS(value);


function testeInfo(ev){
  ev.preventDefault();
  values.nomeCompletob = "teste";
  values.estadoCivilb = "teste";
  values.nacionalidadeb = "teste";
  values.naturalidadeb = "teste";
  values.dataDeNascimentob = "1950-12-12";
  values.cpfb = "teste";
  values.profissaob = "teste";
  values.documentoIdentificacaob = "teste";
  values.numeroDocumentob = "teste";
  values.orgaoExpeditorb = "teste";
  values.enderecoPessoalb = "teste";
  values.enderecoSedeb = "teste";
  values.numeroEnderecoPessoalb = "teste";
  values.complementoPessoalb = "teste";
  values.bairroPessoalb = "teste";
  values.cepb = "teste";
  values.cidadeEstadoPessoalb = "teste";
  values.emailPessoalb = "teste";
  values.telefoneFixoPessoalb = "teste";
  values.celularPessoalb = "teste";
  values.razaoSocialb = "teste";
  values.nomeFantasiab = "teste";
  values.cnpjb = "teste";
  values.numeroInscricaob = "teste";
  values.numeroSedeb = "teste";
  values.complementoSedeb = "teste";
  values.bairroSedeb = "teste";
  values.cepSedeb = "teste";
  values.cidadeEstadoSedeb = "teste";
  values.emailProfissionalb = "teste";
  values.dataDeAberturab = "1950-12-12";
  values.quantidadePessoasOcupadasb = "teste";
  values.ramoDaAtividadeb = "teste";
  values.numeroDaPastab = "teste";
  values.validadeAlvarab = "teste";
  values.areaM2Funcionamentob = "teste";
  values.numeroInscricaoMunicipalb = "teste";
  values.dataDeEmissaoBombeirosb = "1950-12-12";
  values.dataDeValidadeBombeirosb = "1950-12-12";
  values.areaM2Bombeirosb = "teste";
  values.dataDeValidadeVigilanciab = "1950-12-12";
  values.inscricaoVigilanciaSanitariab = "teste";
  values.dataDeEmissaoLicencaAmbientalb = "1950-12-12";
  values.dataDeValidadeLicencaAmbientalb = "1950-12-12";
  values.tipoContratob = "teste";
  values.baixadab = "teste";
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
    values.contratob = "Locação";
  }else if(value=="aluguel"){
    values.contratob = "Aluguel";
  }else if(value=="comodato"){
    values.contratob = "Comodato";
  }else{

  }
}



return(


<div className="App bg-assemiperBlack">

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

<form  action="#" onSubmit={onSubmit} method="POST" className="p-4 rounded-lg justify-self-center mx-auto shadow-2xl bg-assemiperBlack min-w-screen">

<div className="mb-5">
<h1 className="text-xl text-center text-white font-semibold">Agende uma Reunião</h1>
</div>

<div className="grid grid-cols-3 gap-6  bg-assemiperBlack">

<div className="col-span-3">
  <label htmlFor="temaI" className="form-label inline-block mb-2 text-white">
    Tema da Reunião</label>
  <input type="text"
    name="temab"
    required
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="temaI"
    onChange={onChange}
    placeholder=""
  />
</div>

<div className="col-span-3">
<label htmlFor="dataDeNascimentoI" className="form-label inline-block mb-2 text-white">
  Data e Hora da Reunião</label>
  <input type="datetime-local"
     name="dataDaReuniaob"
     max="2050-01-01"
     min="2023-01-01"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="dataDaReuniaoI"
     onChange={onChange}
     placeholder="Data da Reunião"
   />
</div>

<div className="col-span-3">
<label htmlFor="convidadosReuniaoI" className="form-label inline-block mb-2 text-white">
  Convidados</label>
  <textarea type="text"
     rows="2"
     name="convidadosReuniaob"
     max="2010-12-12"
     min="1800-05-01"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="convidadosReuniaoI"
     onChange={onChange}
     placeholder="Convidados"
   />
</div>

<div className="col-span-3">
  <label htmlFor="I" className="form-label inline-block mb-2 text-white">
    </label>
  <input type="text"
    name="b"
    required
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="I"
    onChange={onChange}
    placeholder=""
  />
</div>


<h1 className="text-white mt-10 text-center font-semibold whitespace-nowrap">Contrato de Imóvel - </h1>


<div className="col-span-3">
  <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
    Tipo de Contrato
  </label>
      <select onChange={valorContrato} id="contrato" className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" name="select">
      <option value="comodato">Comodato</option>
      <option value="arrendamento">Arrendamento</option>
      <option value="compraevenda">Compra e Venda</option>
      <option value="aluguel">Aluguel</option>
      <option value="locacao">Locação</option>
    </select>
</div>

<h1 className="text-white mt-10 text-center font-semibold whitespace-nowrap">Declaração de Baixa de Inscrição Municipal  - </h1>

<div className="col-span-3">
    <label htmlFor="baixadab" className="form-label inline-block mb-2 text-white">
      Baixada
    </label>
    {/* <Select 
    name="baixadab"
    options={options}
    onChange={handleChangeBaixa}
    /> */}

    <select id="baixa" className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none" name="select" onChange={valorBaixa}>
      <option value="sim">Sim</option>
      <option value="nao" defaultValue>Não</option>
    </select>

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
                <h3 className="mb-5 text-lg font-normal text-white dark:text-white">Confirmar registro?</h3>
                <button data-modal-toggle="popup-modal" type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Sim, registrar
                </button>
                <button onClick={() => closeModalConfirm()} data-modal-toggle="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Não, cancelar</button>
            </div>
        </div>
    </div>
</div>

)
}

<div className="col-span-3">
        <div onClick={() => openModalConfirm()} className="group bg-red-800 hover:bg-red-700 transition ease-in-out duration-300 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto fill-white" width="20pt" height="20pt" version="1.1" viewBox="0 0 700 700">
              <g>
              <path d="m505.55 77.777h-15.555c0.015625 10.711-2.2109 21.309-6.5352 31.113h22.09c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11v357.78c0 4.125-1.6367 8.082-4.5547 11-2.918 2.918-6.875 4.5547-11 4.5547h-311.11c-4.125 0-8.082-1.6367-11-4.5547-2.918-2.918-4.5547-6.875-4.5547-11v-357.78c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547h22.09c-4.3242-9.8047-6.5508-20.402-6.5352-31.113h-15.555c-12.379 0-24.246 4.918-33 13.668-8.75 8.7539-13.668 20.621-13.668 33v357.78c0 12.375 4.918 24.246 13.668 32.996 8.7539 8.7539 20.621 13.672 33 13.672h311.11c12.379 0 24.246-4.918 33-13.672 8.75-8.75 13.668-20.621 13.668-32.996v-357.78c0-12.379-4.918-24.246-13.668-33-8.7539-8.75-20.621-13.668-33-13.668z"/>
              <path d="m458.89 62.223h-64.867c-4.3047-12.23-13.5-22.121-25.387-27.297-11.883-5.1797-25.391-5.1797-37.273 0-11.887 5.1758-21.082 15.066-25.387 27.297h-64.867c-4.125 0-8.082 1.6367-10.996 4.5547-2.918 2.918-4.5586 6.875-4.5586 11 0 16.504 6.5547 32.328 18.227 44 11.668 11.668 27.496 18.223 43.996 18.223h124.45c16.5 0 32.328-6.5547 43.996-18.223 11.672-11.672 18.227-27.496 18.227-44 0-4.125-1.6406-8.082-4.5586-11-2.9141-2.918-6.8711-4.5547-10.996-4.5547zm-108.89 0c4.125 0 8.082 1.6367 11 4.5547 2.918 2.918 4.5547 6.875 4.5547 11h-31.109c0-4.125 1.6367-8.082 4.5547-11 2.918-2.918 6.875-4.5547 11-4.5547z"/>
              </g>
              </svg>

						</span>
					  <h2 className="text-white">CONCLUIR EDIÇÃO</h2>
				</div>
  </div>

</div>
</form>

</div>


)

}

export default App;

