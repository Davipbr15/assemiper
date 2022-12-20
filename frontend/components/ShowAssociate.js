import Link from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import {ipatual} from './ip.js';

function ShowAssociate(){
    const [assc, setAssociate ] = useState([]);

    const initialValue = {
      nomeFantasiab: '',
    }
    
    const [values, setValues] = useState(initialValue);

    function onChange(ev) {
      
      const {name, value} = ev.target;
    
      console.log({name, value});
    
      setValues({ ...values, [name]: value });
      
    };
    

    useEffect(() => {
  
        async function fetchData(){
          try{
            
          const resposta = await axios.post('http://'+ ipatual +'/api/searchAssociate')
          setAssociate(resposta?.data)
          }catch(error){
            console.log(error);
          }
        };
      
        fetchData();

      }, []);

      const [vendoDados, setVendoDados ] = useState(false);

      const [dados, setDados] = useState(false);
      var result;

      async function dataAssociate(value){
        try{ 
          console.log("Try")
          values.associateIdb = value;
          const resposta = await axios.post('http://'+ ipatual +'/api/editAssociate', values);
          result = resposta?.data    
        }catch(error){
          console.log(error);
        }
        await setDados(result)
      };

      const getDados = async(value) => {
            let getAscValue = value;
            await dataAssociate(getAscValue);
            setVendoDados(true);
      }

      const reload = ()=>{
        window.location.reload();
      }


    return( 
        <>
        {!vendoDados && (
        <div className="App">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
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
                        Estado Civil
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Nacionalidade
                        </th>
                        <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                        Visualizar Dados
                        </th>
                      </tr>
                    </thead>
                  <tbody>
                    {assc.map((ascData, index) => {
                      return (
                        <tr key={index} className="group bg-assemiperBlack font-bold border border-ltransition duration-300 ease-in-out hover:bg-red-700">
                          <td className="px-6 py-4 text-sm font-medium text-white">{ascData.associateId}</td>
                          <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.nomeCompleto}</td>
                          <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.estadoCivil}</td>
                          <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.nacionalidade}</td>
                          <td className="text-sm text-center text-white border-l font-light px-6 py-4 whitespace-normal">
                            <button onClick={() => getDados(ascData._id)} className="transition ease-in duration-300 cursor-pointer text-xl bg-red-600 w-12 group-hover:bg-assemiperBlack group-hover:text-white rounded-xl">
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

        )}

        {vendoDados && (

        <div className="App">

          <div className="App bg-assemiperBlack">
  <button onClick={reload} className="text-center m-5 group hover:scale-110 bg-red-800 hover:bg-red-700 transition ease-in-out duration-150 flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
    Voltar
  </button>

  <div className="mb-5">
  <h1 className="text-xl text-center text-white font-bold">Dados Pessoais</h1>
  </div>


  
  <div className="grid grid-cols-3 gap-6">

    <h1 className="whitespace-nowrap text-sm">Data de criação do associado: {dados[0].dataCriacao}</h1>
  
  <div className="col-span-3">
    <label htmlFor="nomeCompletoI" className="form-label inline-block mb-2 text-white">Nome completo</label>
    <input type="text"
      name="nomeCompletob"
      required
      disabled
      defaultValue={dados[0].dadosPessoais.nomeCompleto}
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
      disabled
      defaultValue={dados[0].dadosPessoais.estadoCivil}
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
disabled
  defaultValue={dados[0].dadosPessoais.nacionalidade}
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
disabled
  defaultValue={dados[0].dadosPessoais.naturalidade}
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
disabled
       defaultValue={dados[0].dadosPessoais.dataDeNascimento}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="dataDeNascimentoI"
       onChange={onChange}
       placeholder="Data de Nascimento"
     />
  </div>
  
  
  
  <div className="col-span-2">
  <label htmlFor="cpfI" className="form-label inline-block mb-2 text-white">
    CPF</label>
    <input type="text"
       name='cpfb'
       required
disabled
       defaultValue={dados[0].dadosPessoais.cpf}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cpfI"
       onChange={onChange}
       placeholder="CPF"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="profissaoI" className="form-label inline-block mb-2 text-white">
    Profissão</label>
    <input type="text"
       name="profissaob"
       required
disabled
  defaultValue={dados[0].dadosPessoais.profissao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
  defaultValue={dados[0].dadosPessoais.documentoIdentificacao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="documentoIdentificacaoI"
       onChange={onChange}
       placeholder="Doc. de Identificação"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="numeroDocumentoI" className="form-label inline-block mb-2 text-white">
    Nº do Documento</label>
    <input type="text"
       name="numeroDocumentob"
       required
disabled
  defaultValue={dados[0].dadosPessoais.numeroDocumento}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroDocumentoI"
       onChange={onChange}
       placeholder="Número do Documento"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="orgaoExpeditorI" className="form-label inline-block mb-2 text-white">
    Orgão Expeditor</label>
    <input type="text"
       name="orgaoExpeditorb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.orgaoExpeditor}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
  defaultValue={dados[0].dadosPessoais.enderecoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
  defaultValue={dados[0].dadosPessoais.numeroEnderecoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroEnderecoPesssoalI"
       onChange={onChange}
       placeholder="Número Endereço"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="complementoPessoalI" className="form-label inline-block mb-2 text-white">
    Complemento</label>
    <input type="text"
       name="complementoPessoalb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.complementoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
  defaultValue={dados[0].dadosPessoais.bairroPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="bairroPessoalI"
       onChange={onChange}
       placeholder="Bairro"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="cepI" className="form-label inline-block mb-2 text-white">
    CEP</label>
    <input type="text"
       name="cepb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.cep}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cepI"
       onChange={onChange}
       placeholder="CEP"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="cidadeEstadoPessoalI" className="form-label inline-block mb-2 text-white">
    cidade e estado pessoal</label>
    <input type="text"
       name="cidadeEstadoPessoalb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.cidadeEstadoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cidadeEstadoPessoalI"
       onChange={onChange}
       placeholder="Cidade e estado pessoal"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="emailPessoalI" className="form-label inline-block mb-2 text-white">
    e-mail pessoal</label>
    <input type="text"
       name="emailPessoalb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.emailPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="emailPessoalI"
       onChange={onChange}
       placeholder="E-mail pessoal"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="telefoneFixoPessoalI" className="form-label inline-block mb-2 text-white">
    telefone fixo pessoal</label>
    <input type="text"
       name="telefoneFixoPessoalb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.telefoneFixoPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="telefoneFixoPessoalI"
       onChange={onChange}
       placeholder="Telefone fixo pessoal"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="celularPessoalI" className="form-label inline-block mb-2 text-white">
    celular pessoal</label>
    <input type="tel"
       name="celularPessoalb"
       required
disabled
  defaultValue={dados[0].dadosPessoais.celularPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="celularPessoalI"
        maxLength="15"
       onChange={onChange}
       placeholder="Celular pessoal"
     />
  </div>
  <br></br>
  
  <div className="mb-5">
  <h1 className="text-xl text-center text-white font-white">Dados Profissonal</h1>
  </div>
  
  <div className="col-span-3">
  <label htmlFor="razaoSocialI" className="form-label inline-block mb-2 text-white">
    Razão Social</label>
    <input type="text"
       name="razaoSocialb"
       required
disabled
        defaultValue={dados[0].dadosProfissionais.razaoSocial}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
        defaultValue={dados[0].dadosProfissionais.nomeFantasia}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="nomeFantasiaI"
       onChange={onChange}
       placeholder="Nome fantasia"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="cnpjI" className="form-label inline-block mb-2 text-white">
    CNPJ</label>
    <input type="text"
       name="cnpjb"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.cnpj}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cnpjI"
       onChange={onChange}
       placeholder="__.___.___/____-__"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="numeroInscricaoI" className="form-label inline-block mb-2 text-white">
    Número de Inscrição</label>
    <input type="text"
       name="numeroInscricaob"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.numeroInscricao}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroInscricaoI"
       onChange={onChange}
       placeholder="Número de inscrição"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="enderecoSedeI" className="form-label inline-block mb-2 text-white">
    Endereço Sede</label>
    <input type="text"
       name="enderecoSedeb"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.enderecoSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
  defaultValue={dados[0].dadosProfissionais.numeroSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="numeroSedeI"
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
disabled
  defaultValue={dados[0].dadosProfissionais.complementoSede}
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
disabled
  defaultValue={dados[0].dadosProfissionais.bairroSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="bairroSedeI"
       onChange={onChange}
       placeholder="Bairro sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="cepSedeI" className="form-label inline-block mb-2 text-white">
    CEP Sede</label>
    <input type="text"
       name="cepSedeb"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.cepSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cepSedeI"
       onChange={onChange}
       placeholder="CEP sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="cidadeEstadoSedeI" className="form-label inline-block mb-2 text-white">
    Cidade e Estado da Sede</label>
    <input type="text"
       name="cidadeEstadoSedeb"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.cidadeEstadoSede}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cidadeEstadoSedeI"
       onChange={onChange}
       placeholder="Cidade e estado da sede"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="emailProfissionalI" className="form-label inline-block mb-2 text-white">
    Email Profissional</label>
    <input type="text"
       name="emailProfissionalb"
       required
disabled
  defaultValue={dados[0].dadosProfissionais.emailProfissional}
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
disabled
  defaultValue={dados[0].dadosProfissionais.dataDeAbertura}
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
disabled
  defaultValue={dados[0].dadosProfissionais.quantidadePessoasOcupadas}
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
disabled
  defaultValue={dados[0].dadosProfissionais.ramoDaAtividade}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
disabled
      defaultValue={dados[0].numeroDaPasta}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="numeroDaPastaI"
      onChange={onChange}
      placeholder="Número da Pasta"
    />
  </div>
  
  <br></br>
  
  <div className="mb-5">
  <h1 className="text-white font-white text-center text-xl whitespace-nowrap">Pasta de Documentos</h1>
  </div>
  
  <br></br>
  
  <h1 className="text-white text-center font-bold whitespace-nowrap">Alvará de Funcionamento - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="validadeAlvarab" className="form-label inline-block mb-2 text-white">Validade</label>
    <input type="text"
      name="validadeAlvarab"
      defaultValue={dados[0].pastaDeDocumentos.alvaraDeFuncionamento.validadeAlvara}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
      defaultValue={dados[0].pastaDeDocumentos.alvaraDeFuncionamento.areaM2Funcionamento}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="numeroInscricaoMunicipalI"
      defaultValue={dados[0].pastaDeDocumentos.alvaraDeFuncionamento.numeroInscricaoMunicipal}
      onChange={onChange}
      placeholder="Número de Inscrição Municipal"
    />
  </div>
  
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Certificado Conformidade Corpo de Bombeiros - </h1>
  
  <div className="col-span-3">
    <label htmlFor="dataDeEmissaoBombeirosb" className="form-label inline-block mb-2 text-white">
      Data de Emissão
    </label>
    <input type="date"
      name="dataDeEmissaoBombeirosb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeEmissaoBombeirosI"
      defaultValue={dados[0].pastaDeDocumentos.certificadoBombeiros.dataDeEmissaoBombeiros}
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
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeBombeirosI"
      defaultValue={dados[0].pastaDeDocumentos.certificadoBombeiros.dataDeValidadeBombeiros}
      onChange={onChange}
      placeholder="Data de Validade"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="areaM2Bombeirosb" className="form-label inline-block mb-2 text-white">
      Área M²
    </label>
    <input type="text"
      name="areaM2Bombeirosb"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="areaM2BombeirosI"
      onChange={onChange}
      defaultValue={dados[0].pastaDeDocumentos.certificadoBombeiros.areaM2Bombeiros}
      placeholder="Área M²"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Alvará de Vigilância Sanitária - </h1>
  
  <div className="col-span-3">
    <label htmlFor="dataDeValidadeVigilanciab" className="form-label inline-block mb-2 text-white">
      Data de Validade da Vigilância Sanitária
    </label>
    <input type="date"
      name="dataDeValidadeVigilanciab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeVigilanciaI"
      onChange={onChange}
      defaultValue={dados[0].pastaDeDocumentos.alvaraDeVigilanciaSanitaria.dataDeValidadeVigilancia}
      placeholder="Data de Validade"
    />
  </div>
  
  <div className="col-span-3">
    <label htmlFor="inscricaoVigilanciaSanitariab" className="form-label inline-block mb-2 text-white">
      Inscrição Vigilância Sanitária
    </label>
    <input type="text"
      name="inscricaoVigilanciaSanitariab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="inscricaoVigilanciaSanitariaI"
      defaultValue={dados[0].pastaDeDocumentos.alvaraDeVigilanciaSanitaria.inscricaoVigilanciaSanitaria}
      onChange={onChange}
      placeholder="Inscrição Vigilância Sanitária"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Licença Ambiental - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="dataDeEmissaoLicencaAmbientalb" className="form-label inline-block mb-2 text-white">
      Data de Emissão
    </label>
    <input type="date"
      name="dataDeEmissaoLicencaAmbientalb"
      defaultValue={dados[0].pastaDeDocumentos.licencaAmbiental.dataDeEmissaoLicencaAmbiental}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
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
      defaultValue={dados[0].pastaDeDocumentos.licencaAmbiental.dataDeValidadeLicencaAmbiental}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeLicencaAmbientalI"
      onChange={onChange}
      placeholder="Data de Validade da Licença Ambiental"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Contrato de Imóvel - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
      Tipo de Contrato
    </label>
    <input type="text"
      name="tipoContratob"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="tipoContratoI"
      defaultValue={dados[0].pastaDeDocumentos.contratoDeImovel.tipoContrato}
      onChange={onChange}
      placeholder="Tipo de Contrato"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Declaração de Baixa de Inscrição Municipal  - </h1>
  
  
  <div className="col-span-3 pb-5">
    <label htmlFor="baixadab" className="form-label inline-block mb-2 text-white">
      Baixada
    </label>
    <input type="text"
      name="baixadab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="baixadaI"
      defaultValue={dados[0].pastaDeDocumentos.declaracaoDeBaixaInscricao.baixada}
      onChange={onChange}
      placeholder="Baixada"
    />
  </div>
  
  </div>  
  </div>

  </div>

        )}
        </>


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
           
        // <div className="App">
        //     <div className="grid grid-cols-1 justify-center">
        //     {assc.map((ascData, index) => {
        //         return(
        //         <div key={index} className="block justify-center max-w-2xl p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        //             <h1 className="text-2xl text-center">{ascData.dadosProfissionais?.nomeFantasia}</h1>
        //             <b className="">ID do Associado: {ascData.associateId}</b>
        //             <br></br>
        //             <b className="">Pasta: {ascData.numeroDaPasta}</b>
        //             <hr></hr>
        //             <div>
        //             <b className="text-2xl">Dados Pessoais</b>
        //             <br></br>
        //             <b className="text-md">Nome: <b className="font-normal">{ascData.dadosPessoais?.nomeCompleto}</b></b>
        //             <br></br>
        //             <b className="text-md">Estado Civil: <b className="font-normal">{ascData.dadosPessoais?.estadoCivil}</b></b>
        //             <br></br>
        //             <b className="text-md">Nacionalidade: <b className="font-normal">{ascData.dadosPessoais?.nacionalidade}</b></b>
        //             <br></br>
        //             <b className="text-md">Naturalidade: <b className="font-normal">{ascData.dadosPessoais?.naturalidade}</b></b>
        //             <br></br>
        //             <b className="text-md">Data de Nascimento: <b className="font-normal">{ascData.dadosPessoais?.dataDeNascimento}</b></b>
        //             <br></br>
        //             <b className="text-md">CPF: <b className="font-normal">{ascData.dadosPessoais?.cpf}</b></b>
        //             <br></br>
        //             <b className="text-md">Documento de Identificação: <b className="font-normal">{ascData.dadosPessoais?.documentoIdentificao}</b></b>
        //             <br></br>
        //             <b className="text-md">Número Documento: <b className="font-normal">{ascData.dadosPessoais?.nuemroDocumento}</b></b>
        //             <br></br>
        //             <b className="text-md">Orgão Expeditor: <b className="font-normal">{ascData.dadosPessoais?.orgaoExpeditor}</b></b>
        //             <br></br>
        //             <b className="text-md">Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.enderecoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Número do Endereço Pessoal: <b className="font-normal">{ascData.dadosPessoais?.numeroEnderecoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Complemento Pessoal: <b className="font-normal">{ascData.dadosPessoais?.complementoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Bairro Pessoal: <b className="font-normal">{ascData.dadosPessoais?.bairroPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">CEP: <b className="font-normal">{ascData.dadosPessoais?.cep}</b></b>
        //             <br></br>
        //             <b className="text-md">Cidade Estado Pessoal: <b className="font-normal">{ascData.dadosPessoais?.cidadeEstadoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Email Pessoal: <b className="font-normal">{ascData.dadosPessoais?.emailPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Telefone Fixo Pessoal: <b className="font-normal">{ascData.dadosPessoais?.telefoneFixoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">Celular Pessoal: <b className="font-normal">{ascData.dadosPessoais?.celularPessoal}</b></b>
        //             <br></br>
        //             </div>
        //             <br></br>
        //             <div>
        //             <hr></hr>
        //             <b className="text-2xl">Dados Profissionais</b>
        //             <br></br>
        //             <b className="text-md">Razão Social: <b className="font-normal">{ascData.dadosProfissionais?.razaoSocial}</b></b>
        //             <br></br>
        //             <b className="text-md">Nome Fantasia: <b className="font-normal">{ascData.dadosProfissionais?.nomeFantasia}</b></b>
        //             <br></br>
        //             <b className="text-md">CNPJ: <b className="font-normal">{ascData.dadosProfissionais?.cnpj}</b></b>
        //             <br></br>
        //             <b className="text-md">Número Inscrição: <b className="font-normal">{ascData.dadosProfissionais?.numeroInscricao}</b></b>
        //             <br></br>
        //             <b className="text-md">Endereço Sede: <b className="font-normal">{ascData.dadosProfissionais?.enderecoSede}</b></b>
        //             <br></br>
        //             <b className="text-md">Número Sede: <b className="font-normal">{ascData.dadosProfissionais?.numeroSede}</b></b>
        //             <br></br>
        //             <b className="text-md">Complemento Sede: <b className="font-normal">{ascData.dadosProfissionais?.complementoSede}</b></b>
        //             <br></br>
        //             <b className="text-md">Bairro Sede: <b className="font-normal">{ascData.dadosProfissionais?.bairroSede}</b></b>
        //             <br></br>
        //             <b className="text-md">CEP Sede: <b className="font-normal">{ascData.dadosProfissionais?.cepSede}</b></b>
        //             <br></br>
        //             <b className="text-md">Cidade Estado Sede: <b className="font-normal">{ascData.dadosProfissionais?.cidadeEstadoSede}</b></b>
        //             <br></br>
        //             <b className="text-md">Email Profissional: <b className="font-normal">{ascData.dadosProfissionais?.emailProfissional}</b></b>
        //             <br></br>
        //             <b className="text-md">Data de Abertura: <b className="font-normal">{ascData.dadosProfissionais?.dataDeAbertura}</b></b>
        //             <br></br>
        //             <b className="text-md">Quantidades de Pessoas Ocupadas: <b className="font-normal">{ascData.dadosProfissionais?.quantidadePessoasOcupadas}</b></b>
        //             <br></br>
        //             <b className="text-md">Ramo da Atividade: <b className="font-normal">{ascData.dadosProfissionais?.ramoDaAtividade}</b></b>
        //             <br></br>
        //             </div>
        //         <br></br>
        //         </div>
        //         );
            
        // }
        //     )}

            
            
        //     </div>

        // </div>

    )

}


export default ShowAssociate;