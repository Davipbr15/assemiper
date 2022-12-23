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
<h1 className="text-xl text-center text-white font-semibold">Dados Pessoais</h1>
</div>

<div className="grid grid-cols-3 gap-6  bg-assemiperBlack">

<div className="col-span-3">
  <label htmlFor="nomeCompletoI" className="form-label inline-block mb-2 text-white">Nome completo</label>
  <input type="text"
    name="nomeCompletob"
    required
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
       className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     max="2010-12-12"
     min="1800-05-01"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="dataDeNascimentoI"
     onChange={onChange}
     placeholder="Data de Nascimento"
   />
</div>



{/* <div className="col-span-3">
<label htmlFor="cpfI" className="form-label inline-block mb-2 text-white">
  CPF</label>
  <input type="text"
     name='cpfb'
     required
     className="mascara-cpf form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cpfI"
     maxLength="8"
     onChange={onChange}
     placeholder="CPF"
   />
</div> */}
<div className="col-span-2">
<label htmlFor="cpfI" className="form-label inline-block mb-2 text-white">
CPF</label>
      <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='999.999.999-99'
      id="cpfI"
      name="cpfb"
      placeholder='CPF'
      onChange={onChange}
      />
</div>


<div className="col-span-3">
<label htmlFor="profissaoI" className="form-label inline-block mb-2 text-white">
  Profissão</label>
  <input type="text"
     name="profissaob"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="profissaoI"
     onChange={onChange}
     placeholder="Profissão"
   />
</div>



<div className="col-span-3">
<label htmlFor="documentoIdentificacaoI" className="form-label inline-block mb-2 text-white">
  Documento de identificação</label>
  <input type="text"
     name="documentoIdentificacaob"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="documentoIdentificacaoI"
     onChange={onChange}
     placeholder="Doc. de Identificação"
   />
</div>



<div className="col-span-3">
<label htmlFor="numeroDocumentoI" className="form-label inline-block mb-2 text-white">
  Nº do Documento</label>
  <input
     type="text"
     name="numeroDocumentob"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroDocumentoI"
     onChange={onChange}
     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
     placeholder="Número do Documento"
   />
</div>



<div className="col-span-3">
<label htmlFor="orgaoExpeditorI" className="form-label inline-block mb-2 text-white">
  Orgão Expeditor</label>
  <input type="text"
     name="orgaoExpeditorb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="orgaoExpeditorI"
     onChange={onChange}
     placeholder="Orgão Expeditor"
   />
</div>



<div className="col-span-3">
<label htmlFor="enderecoPessoalI" className="form-label inline-block mb-2 text-white">
  Endereço</label>
  <input type="text"
     name="enderecoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoPessoalI"
     onChange={onChange}
     placeholder="Endereço Pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="numeroEnderecoPessoalI" className="form-label inline-block mb-2 text-white">
  Nº Endereço</label>
  <input type="text"
     name="numeroEnderecoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroEnderecoPesssoalI"
     onChange={onChange}
     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
     placeholder="Número Endereço"
   />
</div>



<div className="col-span-3">
<label htmlFor="complementoPessoalI" className="form-label inline-block mb-2 text-white">
  Complemento</label>
  <input type="text"
     name="complementoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="complementoPessoalI"
     onChange={onChange}
     placeholder="Complemento Endereço"
   />
</div>



<div className="col-span-3">
<label htmlFor="bairroPessoalI" className="form-label inline-block mb-2 text-white">
  Bairro</label>
  <input type="text"
     name="bairroPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroPessoalI"
     onChange={onChange}
     placeholder="Bairro"
   />
</div>



<div className="col-span-3">
<label htmlFor="cepI" className="form-label inline-block mb-2 text-white">
  CEP</label>
  <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='99999-999'
      id="cepI"
      name="cepb"
      placeholder='CEP'
      onChange={onChange}
  />
</div>


<div className="col-span-3">
<label htmlFor="cidadeEstadoPessoalI" className="form-label inline-block mb-2 text-white">
  Cidade e estado pessoal</label>
  <input type="text"
     name="cidadeEstadoPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="cidadeEstadoPessoalI"
     onChange={onChange}
     placeholder="Cidade e estado pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="emailPessoalI" className="form-label inline-block mb-2 text-white">
  E-mail pessoal</label>
  <input type="email"
     name="emailPessoalb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="emailPessoalI"
     onChange={onChange}
     placeholder="E-mail pessoal"
   />
</div>



<div className="col-span-3">
<label htmlFor="telefoneFixoPessoalI" className="form-label inline-block mb-2 text-white">
  Telefone fixo pessoal</label>
  <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='(99)99999-9999'
      id="telefoneFixoPessoalI"
      name="telefoneFixoPessoalb"
      placeholder='(XX) XXXXX-XXXX ou N/A'
      onChange={onChange}
  />
</div>




<div className="col-span-3">
<label htmlFor="celularPessoalI" className="form-label inline-block mb-2 text-white">
  Celular pessoal</label>
  <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='(99) 99999-9999'
      id="celularPessoalI"
      name="celularPessoalb"
      placeholder='(XX) XXXXX-XXXX'
      onChange={onChange}
  />
</div>
<br></br>
<div className="mb-5">
<h1 className="text-xl text-center text-white font-semibold">Dados Profissonal</h1>
</div>
<div className="col-span-3">
<label htmlFor="razaoSocialI" className="form-label inline-block mb-2 text-white">
  Razão Social</label>
  <input type="text"
     name="razaoSocialb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="razaoSocialI"
     onChange={onChange}
     placeholder="Razão social"
   />
</div>


<div className="col-span-3">
<label htmlFor="nomeFantasiaI" className="form-label inline-block mb-2 text-white">
  Nome Fantasia</label>
  <input type="text"
     name="nomeFantasiab"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="nomeFantasiaI"
     onChange={onChange}
     placeholder="Nome fantasia"
   />
</div>

<div className="col-span-3">
<label htmlFor="cnpjI" className="form-label inline-block mb-2 text-white">
  CNPJ</label>
     <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
      mask='999.999.999/9999-99'
      id="cnpjI"
      name="cnpjb"
      placeholder='000.000.000/0000-00'
      onChange={onChange}
  />
</div>

<div className="col-span-3">
<label htmlFor="numeroInscricaoI" className="form-label inline-block mb-2 text-white">
  Número de Inscrição Estadual</label>
  <input type="text"
     name="numeroInscricaob"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroInscricaoI"
     onChange={onChange}
     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
     placeholder="Número de inscrição"
   />
</div>

<div className="col-span-3">
<label htmlFor="enderecoSedeI" className="form-label inline-block mb-2 text-white">
  Endereço Sede</label>
  <input type="text"
     name="enderecoSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="enderecoSedeI"
     onChange={onChange}
     placeholder="Endereço sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="numeroSedeI" className="form-label inline-block mb-2 text-white">
  Número Sede</label>
  <input type="text"
     name="numeroSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="numeroSedeI"
     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
     onChange={onChange}
     placeholder="Número sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="complementoSedeI" className="form-label inline-block mb-2 text-white">
  Complemento Sede</label>
  <input type="text"
     name="complementoSedeb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="bairroSedeI"
     onChange={onChange}
     placeholder="Bairro sede"
   />
</div>

<div className="col-span-3">
<label htmlFor="cepSedeI" className="form-label inline-block mb-2 text-white">
  CEP Sede</label>
  <InputMask
      className="form-control bg-white block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     max="2010-12-12"
     min="1800-05-01"
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
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
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="quantidadePessoasOcupadasI"
     onChange={onChange}
     onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
     placeholder="Quantidade de pessoas ocupadas"
   />
</div>

<div className="col-span-3">
<label htmlFor="ramoDaAtividadeI" className="form-label inline-block mb-2 text-white">
  Ramo da Atividade</label>
  <input type="text"
     name="ramoDaAtividadeb"
     required
     className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
     id="ramoDaAtividadeI"
     onChange={onChange}
     placeholder="Ramo da atividade"
   />
</div>

<div className="col-span-3">
  <label htmlFor="numeroDaPastab" className="form-label inline-block mb-2 text-white">Número da Pasta</label>
  <input type="text"
    name="numeroDaPastab"
    required
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="numeroDaPastaI"
    maxLength="3"
    onChange={onChange}
    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
    placeholder="Número da Pasta"
  />
</div>

<br></br>

<div className="mb-5">
<h1 className="text-white font-semibold text-center text-xl whitespace-nowrap">Pasta de Documentos</h1>
</div>

<br></br>

<h1 className="text-white text-center font-semibold whitespace-nowrap">Alvará de Funcionamento - </h1>


<div className="col-span-3">
  <label htmlFor="validadeAlvarab" className="form-label inline-block mb-2 text-white">Validade</label>
  <input type="text"
    name="validadeAlvarab"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="validadeAlvaraI"
    onChange={onChange}
    placeholder="Validade Alvará"
  />
</div>
<div className="col-span-3">
  <label htmlFor="areaM2Funcionamentob" className="form-label inline-block mb-2 text-white">
    Área M²
  </label>
  <input type="text"
    name="areaM2Funcionamentob"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="areaM2FuncionamentoI"
    onChange={onChange}
    placeholder="Área M²"
  />
</div>
<div className="col-span-3">
  <label htmlFor="numeroInscricaoMunicipalb" className="form-label inline-block mb-2 text-white">
    Número da Inscrição Municipal
  </label>
  <input type="text"
    name="numeroInscricaoMunicipalb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="numeroInscricaoMunicipalI"
    onChange={onChange}
    onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}

    placeholder="Número de Inscrição Municipal"
  />
</div>


<h1 className="text-white mt-10 text-center font-semibold whitespace-nowrap">Certificado Conformidade Corpo de Bombeiros - </h1>

<div className="col-span-3">
  <label htmlFor="dataDeEmissaoBombeirosb" className="form-label inline-block mb-2 text-white">
    Data de Emissão
  </label>
  <input type="date"
    name="dataDeEmissaoBombeirosb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeEmissaoBombeirosI"
    max="2010-12-12"
    min="1800-05-01"
    onChange={onChange}
    placeholder="Data de Emissão"
  />
</div>
<div className="col-span-3">
  <label htmlFor="dataDeValidadeBombeirosb" className="form-label inline-block mb-2 text-white">
    Data de Validade
  </label>
  <input type="date"
    name="dataDeValidadeBombeirosb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeBombeirosI"
    onChange={onChange}
      max="2010-12-12"
     min="1800-05-01"
    placeholder="Data de Validade"
  />
</div>

<div className="col-span-3">
  <label htmlFor="areaM2Bombeirosb" className="form-label inline-block mb-2 text-white">
    Área M²
  </label>
  <input type="text"
    name="areaM2Bombeirosb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="areaM2BombeirosI"
    onChange={onChange}
    placeholder="Área M²"
  />
</div>

<h1 className="text-white mt-10 text-center font-semibold whitespace-nowrap">Alvará de Vigilância Sanitária - </h1>

<div className="col-span-3">
  <label htmlFor="dataDeValidadeVigilanciab" className="form-label inline-block mb-2 text-white">
    Data de Validade da Vigilância Sanitária
  </label>
  <input type="date"
    name="dataDeValidadeVigilanciab"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeVigilanciaI"
    onChange={onChange}
    max="2010-12-12"
    min="1800-05-01"
    placeholder="Data de Validade"
  />
</div>

<div className="col-span-3">
  <label htmlFor="inscricaoVigilanciaSanitariab" className="form-label inline-block mb-2 text-white">
    Inscrição Vigilância Sanitária
  </label>
  <input type="text"
    name="inscricaoVigilanciaSanitariab"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="inscricaoVigilanciaSanitariaI"
    onChange={onChange}
    placeholder="Inscrição Vigilância Sanitária"
  />
</div>

<h1 className="text-white mt-10 text-center font-semibold whitespace-nowrap">Licença Ambiental - </h1>


<div className="col-span-3">
  <label htmlFor="dataDeEmissaoLicencaAmbientalb" className="form-label inline-block mb-2 text-white">
    Data de Emissão
  </label>
  <input type="date"
    name="dataDeEmissaoLicencaAmbientalb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeEmissaoLicencaAmbientalI"
    onChange={onChange}
    placeholder="Data de Emissão da Licença Ambiental"
  />
</div>

<div className="col-span-3">
  <label htmlFor="dataDeValidadeLicencaAmbientalb" className="form-label inline-block mb-2 text-white">
    Data de Validade da Licença Ambiental
  </label>
  <input type="date"
    name="dataDeValidadeLicencaAmbientalb"
    className="form-control block w-full px-3 py-1.5 text-lg font-semibold text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
    id="dataDeValidadeLicencaAmbientalI"
    onChange={onChange}
    placeholder="Data de Validade da Licença Ambiental"
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

