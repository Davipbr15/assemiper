import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Image from 'next/image';
import Header from "../components/Header.js";
import {ipatual} from './ip.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import moment from 'moment';
require('moment/locale/pt-br');

function ImprimirAssociado(){

    const [view, setView] = useState();

    var dataFormatada = moment()
    var dataAtual = dataFormatada.format('LLLL')  

    const initialValue = {
        razaoSocialb: '',
        nomeFantasiab: '',
      }
      
      const [values, setValues] = useState(initialValue);
      const [assc, setAssociate ] = useState([]);

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
      }, []);
      
      
      function onChange(ev) {
      
        const {name, value} = ev.target;
      
        console.log({name, value});
      
        setValues({ ...values, [name]: value });
        
      };

      const [imprimindo, setImprimindo] = React.useState(false);
      const [imprimir, setImprimir] = React.useState(false);
    
      const [navbarOpen, setNavbarOpen] = React.useState(false);

      function toggleZoomScreen() {
        document.body.style.zoom = "55%";
      } 
      
      var result;
      async function imprimeAssociate(value){
        try{ 
          console.log("Try")
          values.associateIdb = value;
          const resposta = await Axios.post('http://'+ ipatual +'/api/editAssociate', values);
          result = resposta?.data    
        }catch(error){
          console.log(error);
        }
        await setImprimir(result)
        toggleZoomScreen();
      };
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      const getPrintAssociate = async(value) => {

        let getAscValue = value;
            setImprimir((prev) => !prev)
            await imprimeAssociate(getAscValue)
            setImprimindo(true)
        // await editingAssociate(getAscValue);
      }

      // async function getPrintAssociate(value){

      // }

      function print(){
        window.print()
      }
      
      function voltar(){
        window.location.reload()
      }


    return( 
        <>
        {imprimindo &&
        (
        <div className="App2 p-5 whitespace-nowrap">
          <button onClick={() => voltar()} x-data="topBtn" id="topButton"
            className="no-print motion-reduced fixed z-50 show p-5 text-2xl bg-red-500 text-white rounded-full shadow-md top-20 left-5">
            <i className="pr-3 bi bi-arrow-left-circle-fill"></i>Voltar
          </button>
          <button onClick={print} x-data="topBtn" id="topButton"
            className="no-print motion-reduced fixed z-50 show p-5 text-2xl bg-blue-600 text-white rounded-full shadow-md top-20 left-[180px] animate-pulse">
            Imprimir<i className="pl-3 bi bi-printer"></i>
          </button>
          
        
        <div className="flex justify-center"> 
          <div className="w-2/5 justify-center">
            <Image
            src="/img/headerPDF.png"
            alt="Imagem não encontrada"
            className=''
            width={1169}
            height={441}
            quality={100}
            />
          </div>
        </div> 
          <h1 className='text-sm text-right'>
          Criado em: {imprimir.dataCriacao}
          </h1>
          <h1 className="bg-assemiperRed pl-6 text-3xl text-white font-bold rounded-xl p-2">Dados Pessoais:</h1>
          {/* <div className="bg-assemiperRed h-1">
          </div> */}
          <div className="informacoes pb-2 w-1/4 pt-2">
                <h1 className="text-2xl text-black font-bold rounded-xl p-1"
                >Informações <i className="text-xl bi bi-chevron-down"></i></h1>
                <ul className="pl-2">
            <li>                
              <div className="flex mt-2">
                <h1 className="text-xl p-1">Nome completo:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.nomeCompleto}</h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">Estado Civil:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.estadoCivil}</h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">Nacionalidade:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.nacionalidade}</h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">
                  Naturalidade:
                </h1>
                <h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.naturalidade}
                </h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">Data de Nascimento:</h1><h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.dataDeNascimento.charAt(8)+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(9)
                  +"/"+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(5)+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(6)
                  +"/"+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(0)+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(1)+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(2)+
                  imprimir.dadosPessoais.dataDeNascimento.charAt(3)
                  }
                </h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">CPF:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.cpf}</h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">Profissão:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.profissao}</h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">Documento de Identificação:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.documentoIdentificacao}</h1>
              </div>
            </li>
            <div className="flex">
              <h1 className="text-xl p-1">Número do Documento de Identificação:</h1><h1 className="font-semibold p-1 text-xl">{imprimir.dadosPessoais.numeroDocumento}</h1>
            </div>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">
                  Orgão Expeditor:
                </h1>
                <h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.orgaoExpeditor}
                </h1>
              </div>
            </li>
            </ul>
          </div>
              <div className="endereco border-assemiperRed border-t pb-2 pt-2">
              <h1 className="text-2xl text-black font-bold rounded-xl p-1"
              >Endereço <i className="text-xl bi bi-chevron-down"></i> </h1>
              <ul className="pl-3">
                <li>
                  <div className="flex">
                    <h1 className="text-xl p-1">
                      Endereço Pessoal:</h1>
                    <h1 className="font-semibold p-1 text-xl">
                      {imprimir.dadosPessoais.enderecoPessoal}
                    </h1>
                  </div>
                </li>
                <li>
                <div className="flex">
                  <h1 className="text-xl p-1">
                    Número Endereço:</h1>
                  <h1 className="font-semibold p-1 text-xl">
                    {imprimir.dadosPessoais.numeroEnderecoPessoal}
                  </h1>
                </div>
                </li>
                <li>
                <div className="flex">
                  <h1 className="text-xl p-1">
                    Complemento:</h1>
                  <h1 className="font-semibold p-1 text-xl">
                    {imprimir.dadosPessoais.complementoPessoal}
                  </h1>
                </div>
                </li>
                <li>
                <div className="flex">
                  <h1 className="text-xl p-1">
                    Bairro:</h1>
                  <h1 className="font-semibold p-1 text-xl">
                    {imprimir.dadosPessoais.bairroPessoal}
                  </h1>
                </div>
                </li>
                <li>
                <div className="flex">
                  <h1 className="text-xl p-1">
                    CEP:</h1>
                  <h1 className="font-semibold p-1 text-xl">
                    {imprimir.dadosPessoais.cep}
                  </h1>
                </div>
                </li>
                <li>
                <div className="flex">
                  <h1 className="text-xl p-1">
                    Cidade e Estado:</h1>
                  <h1 className="font-semibold p-1 text-xl">
                    {imprimir.dadosPessoais.cidadeEstadoPessoal}
                  </h1>
                </div>
                </li>
                </ul>
              </div>
              <div className="contato border-assemiperRed border-t pb-2 pt-2">
              <h1 className="text-2xl text-black font-bold rounded-xl p-1"
              >Contato <i className="text-xl bi bi-chevron-down"></i> </h1>
            <ul className="pl-4">
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">
                  Email:</h1>
                <h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.emailPessoal}
                </h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl p-1">
                  Telefone Fixo:</h1>
                <h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.telefoneFixoPessoal}
                </h1>
              </div>
            </li>
            <li>
              <div className="flex">
                <h1 className="text-xl pb-5 p-1">
                  Telefone Celular:</h1>
                <h1 className="font-semibold p-1 text-xl">
                  {imprimir.dadosPessoais.celularPessoal}
                </h1>
              </div>
            </li>
            </ul>
          </div>
          {
          //{DADOS PROFISSIONAIS}
          }
          <h1 className="bg-assemiperRed pl-6 text-3xl text-white font-bold rounded-xl p-2"
          >Dados Profissionais:</h1>
          
          <h1 className="text-2xl pt-3 text-black font-bold rounded-xl p-1"
              >Informações <i className="text-xl bi bi-chevron-down"></i> </h1>
            <ul className="pl-4">
          <li>
            <div className="flex">
              <h1 className="text-xl p-1">
                Razão Social:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.razaoSocial}
              </h1>
            </div>
          </li>
          <li>
            <div className="flex">
              <h1 className="text-xl p-1">
                Nome Fantasia:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.nomeFantasia}
              </h1>
            </div>
          </li>
          <li>
            <div className="flex">
              <h1 className="text-xl p-1">
                CNPJ:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.cnpj}
              </h1>
            </div>
          </li>
          <li>
            <div className="flex">
              <h1 className="text-xl p-1">
                Número de Inscrição:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.numeroInscricao}
              </h1>
            </div>
          </li>
          </ul>
          <div className="contato border-assemiperRed border-t pb-2 pt-2"/>
          <h1 className="text-2xl text-black font-bold rounded-xl p-1"
              >Endereço <i className="text-xl bi bi-chevron-down"></i> </h1>
          <ul className="pl-4">
            
            <div className="flex">
              <h1 className="text-xl p-1">
                Endereço:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.enderecoSede}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                Número:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.numeroSede}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                Complemento:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.complementoSede}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                Bairro:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.bairroSede}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                CEP:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.cepSede}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                Cidade e Estado:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.cidadeEstadoSede}
              </h1>
            </div>
          </ul>

          <div className="contato border-assemiperRed border-t pb-2 pt-2"/>
          <h1 className="text-2xl text-black font-bold rounded-xl p-1"
              >Outros <i className="text-xl bi bi-chevron-down"></i> </h1>
          <ul className="pl-4">
            
  
            <div className="flex">
              <h1 className="text-xl p-1">
                Email Profissional:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.emailProfissional}
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
                Data de abertura:</h1>
              <h1 className="font-semibold p-1 text-xl">
              {imprimir.dadosProfissionais.dataDeAbertura.charAt(8)+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(9)
                +"/"+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(5)+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(6)
                +"/"+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(0)+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(1)+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(2)+
                imprimir.dadosProfissionais.dataDeAbertura.charAt(3)
                }
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-xl p-1">
               Ramo da Atividade:</h1>
              <h1 className="font-semibold p-1 text-xl">
                {imprimir.dadosProfissionais.ramoDaAtividade}
              </h1>
            </div>
          </ul>

          <div className="text-sm text-right">
            <h1>Impresso em: {dataAtual}</h1>
          </div>
          
        </div>
        )   
        }
        {!imprimindo &&(
        <>
            <Header/>
        <div className="App mx-auto">
            <div className="flex mx-auto flex-col">
                <div className="w-screen sm:-mx-6 lg:-mx-8">
                    <div className="py-2 sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">
                            <table className="tg min-w-screen">
                            <thead className="">
                                <tr>
                                    <th scope="col" className="tg-k4e5 w-10 text-sm font-medium text-white px-6 py-4 text-center">
                      ID
                                    </th>
                                    <th scope="col" className="tg-k4e5 max-w-60 text-sm font-medium text-white px-6 py-4 text-center">
                      Nome Completo
                                    </th>
                                    <th scope="col" className="tg-k4e5 max-w-60 text-sm font-medium text-white px-6 py-4 text-center">
                                      Razão Social
                                    </th>
                                    <th scope="col" className="tg-k4e5 max-w-60 text-sm font-medium text-white px-6 py-4 text-center">
                     Nome Fantasia
                                    </th>
                                    <th scope="col" className="tg-k4e5 max-w-60 text-sm font-medium text-white px-8 py-4 text-center">
                     CNPJ
                                    </th>
                                    <th scope="col" className="tg-k4e5  max-w-60 text-sm font-medium text-white px-6 py-4 text-center">
                     Imprimir
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                {assc.map((ascData, index) => {
                  return (
                    <tr key={index} className="group bg-assemiperBlack font-bold border-b break-all transition duration-300 ease-in-out hover:bg-red-700">
                      <td className="tg-dg7a group-hover:bg-slate-200 px-6 py-4 text-sm font-bold text-white">{ascData.associateId}</td>
                      <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l break-all font-light py-4"><p className="break-words w-32">{ascData.dadosPessoais?.nomeCompleto}</p></td>
                      <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.nomeFantasia}</td>
                      <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.razaoSocial}</td>
                      <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light whitespace-nowrap">{ascData.dadosProfissionais?.cnpj}</td>
                      <td className="group-hover:bg-slate-200 text-center"><button name="imprimirAsc" onClick={() => getPrintAssociate(ascData._id)} className="hover:scale-125 transition  duration-150 linear text-black bg-opacity-50 rounded-full p-2"><i className="bi bi-printer"></i></button></td>
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
        </>
        )}
        </>
    )

}

export default ImprimirAssociado;