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
          result = resposta?.data;
        }catch(error){
          console.log(error);
        }
        await setDados(result)
        console.log(result)
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

        <div className="sm:-mx-6 lg:-mx-8">
          <div className="py-2 sm:px-6 lg:px-8">
            <div className="py-2">
              <div className="overflow-x-auto">
                  <table className="tg min-w-screen">
                    <thead className="min-w-screen">
                      <tr>
                        <th scope="col" className="tg-k4e5 w-10 text-sm font-medium text-white px-6 py-4 text-left">
                          ID
                        </th>
                        <th scope="col" className="tg-k4e5 w-72 text-sm font-medium text-white px-6 py-4 text-left">
                          Raz??o Social
                        </th>
                        <th scope="col" className="tg-k4e5 w-72 text-sm font-medium text-white px-6 py-4 text-left">
                         Nome Fantasia
                        </th>
                        <th scope="col" className="tg-k4e5 w-16 text-sm font-medium text-white px-6 py-4 text-left">
                          CNPJ
                        </th>
                        <th scope="col" className="tg-k4e5 w-8 text-sm font-medium text-white px-6 py-4 text-left">
                        Visualizar Dados
                        </th>
                      </tr>
                    </thead>
                  <tbody>
                    {assc.map((ascData, index) => {
                      return (
                        <tr key={index} className="group whitespace-normal bg-assemiperBlack font-bold border border-l transition duration-100 ease-in-out hover:bg-red-700">
                          <td className="tg-dg7a group-hover:bg-slate-200 px-6 py-4 text-sm font-medium text-white">{ascData.associateId}</td>
                          <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.razaoSocial}</td>
                          <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.nomeFantasia}</td>
                          <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.cnpj}</td>
                          <td className="tg-dg7a group-hover:bg-slate-200 text-sm text-center text-white border-l font-light px-6 py-4 whitespace-normal">
                            <button onClick={() => getDados(ascData._id)} className="transition ease-in duration-100 cursor-pointer text-xl w-12 group-hover:text-assemiperBlack hover:scale-150 rounded-xl">
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

        <div className="">

          <div className="bg-assemiperBlack">
  <button onClick={reload} className="text-center m-5 group hover:scale-110 bg-red-800 hover:bg-red-700 transition ease-in-out duration-150 flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
    Voltar
  </button>

  <div className="mb-5">
  <h1 className="text-2xl text-center text-white font-bold">Dados Pessoais</h1>
  </div>


  
  <div className="grid grid-cols-3 gap-6">

    <h1 className="whitespace-nowrap text-sm">Data de cria????o do associado: {dados.dataCriacao}</h1>
  
  <div className="col-span-3">
    <label htmlFor="nomeCompletoI" className="form-label inline-block mb-2 text-white">Nome completo</label>
    <input type="text"
      name="nomeCompletob"
      required
      disabled
      defaultValue={dados.dadosPessoais.nomeCompleto}
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
      defaultValue={dados.dadosPessoais.estadoCivil}
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
  defaultValue={dados.dadosPessoais.nacionalidade}
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
  defaultValue={dados.dadosPessoais.naturalidade}
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
       defaultValue={dados.dadosPessoais.dataDeNascimento}
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
       defaultValue={dados.dadosPessoais.cpf}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cpfI"
       onChange={onChange}
       placeholder="CPF"
     />
  </div>
  
  
  
  <div className="col-span-3">
  <label htmlFor="profissaoI" className="form-label inline-block mb-2 text-white">
    Profiss??o</label>
    <input type="text"
       name="profissaob"
       required
disabled
  defaultValue={dados.dadosPessoais.profissao}
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
disabled
  defaultValue={dados.dadosPessoais.documentoIdentificacao}
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
disabled
  defaultValue={dados.dadosPessoais.numeroDocumento}
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
disabled
  defaultValue={dados.dadosPessoais.orgaoExpeditor}
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
disabled
  defaultValue={dados.dadosPessoais.enderecoPessoal}
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
disabled
  defaultValue={dados.dadosPessoais.numeroEnderecoPessoal}
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
disabled
  defaultValue={dados.dadosPessoais.complementoPessoal}
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
disabled
  defaultValue={dados.dadosPessoais.bairroPessoal}
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
  defaultValue={dados.dadosPessoais.cep}
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
  defaultValue={dados.dadosPessoais.cidadeEstadoPessoal}
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
  defaultValue={dados.dadosPessoais.emailPessoal}
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
  defaultValue={dados.dadosPessoais.telefoneFixoPessoal}
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
  defaultValue={dados.dadosPessoais.celularPessoal}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="celularPessoalI"
        maxLength="15"
       onChange={onChange}
       placeholder="Celular pessoal"
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
disabled
        defaultValue={dados.dadosProfissionais.razaoSocial}
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
disabled
        defaultValue={dados.dadosProfissionais.nomeFantasia}
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
  defaultValue={dados.dadosProfissionais.cnpj}
       className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
       id="cnpjI"
       onChange={onChange}
       placeholder="__.___.___/____-__"
     />
  </div>
  
  <div className="col-span-3">
  <label htmlFor="numeroInscricaoI" className="form-label inline-block mb-2 text-white">
    N??mero de Inscri????o</label>
    <input type="text"
       name="numeroInscricaob"
       required
disabled
  defaultValue={dados.dadosProfissionais.numeroInscricao}
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
      disabled
      defaultValue={dados.dadosProfissionais.enderecoSede}
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
disabled
  defaultValue={dados.dadosProfissionais.numeroSede}
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
disabled
  defaultValue={dados.dadosProfissionais.complementoSede}
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
  defaultValue={dados.dadosProfissionais.bairroSede}
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
  defaultValue={dados.dadosProfissionais.cepSede}
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
  defaultValue={dados.dadosProfissionais.cidadeEstadoSede}
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
  defaultValue={dados.dadosProfissionais.emailProfissional}
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
  defaultValue={dados.dadosProfissionais.dataDeAbertura}
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
  defaultValue={dados.dadosProfissionais.quantidadePessoasOcupadas}
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
  defaultValue={dados.dadosProfissionais.ramoDaAtividade}
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
disabled
      defaultValue={dados.numeroDaPasta}
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
      defaultValue={dados.pastaDeDocumentos.alvaraDeFuncionamento.validadeAlvara}
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
      defaultValue={dados.pastaDeDocumentos.alvaraDeFuncionamento.areaM2Funcionamento}
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
      defaultValue={dados.pastaDeDocumentos.alvaraDeFuncionamento.numeroInscricaoMunicipal}
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
      defaultValue={dados.pastaDeDocumentos.certificadoBombeiros.dataDeEmissaoBombeiros}
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
      defaultValue={dados.pastaDeDocumentos.certificadoBombeiros.dataDeValidadeBombeiros}
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
      defaultValue={dados.pastaDeDocumentos.certificadoBombeiros.areaM2Bombeiros}
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
      defaultValue={dados.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.dataDeValidadeVigilancia}
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
      defaultValue={dados.pastaDeDocumentos.alvaraDeVigilanciaSanitaria.inscricaoVigilanciaSanitaria}
      onChange={onChange}
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
      defaultValue={dados.pastaDeDocumentos.licencaAmbiental.dataDeEmissaoLicencaAmbiental}
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
      defaultValue={dados.pastaDeDocumentos.licencaAmbiental.dataDeValidadeLicencaAmbiental}
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="dataDeValidadeLicencaAmbientalI"
      onChange={onChange}
      placeholder="Data de Validade da Licen??a Ambiental"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Contrato de Im??vel - </h1>
  
  
  <div className="col-span-3">
    <label htmlFor="tipoContratob" className="form-label inline-block mb-2 text-white">
      Tipo de Contrato
    </label>
    <input type="text"
      name="tipoContratob"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="tipoContratoI"
      disabled
      defaultValue={dados.pastaDeDocumentos.contratoDeImovel.tipoContrato}
      onChange={onChange}
      placeholder="Tipo de Contrato"
    />
  </div>
  
  <h1 className="text-white mt-10 text-center font-bold whitespace-nowrap">Declara????o de Baixa de Inscri????o Municipal  - </h1>
  
  
  <div className="col-span-3 pb-5">
    <label htmlFor="baixadab" className="form-label inline-block mb-2 text-white">
      Baixada
    </label>
    <input type="text"
      name="baixadab"
      className="form-control block w-full px-3 py-1.5 text-base font-normal text-assemiperBlack bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-assemiperBlack focus:bg-white focus:border-blue-600 focus:outline-none"
      id="baixadaI"
      defaultValue={dados.pastaDeDocumentos.declaracaoDeBaixaInscricao.baixada}
      onChange={onChange}
      placeholder="Baixada"
    />
  </div>
  
  </div>  
  </div>
  <div className="flex justify-center">
    <button onClick={reload} className="w-1/3 text-center m-5 group hover:scale-110 bg-red-800 hover:bg-red-700 transition ease-in-out duration-150 flex justify-center py-2 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-roxo hover:bg-roxo focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-roxo">
      Voltar
    </button>
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
        //             <b className="text-md">Documento de Identifica????o: <b className="font-normal">{ascData.dadosPessoais?.documentoIdentificao}</b></b>
        //             <br></br>
        //             <b className="text-md">N??mero Documento: <b className="font-normal">{ascData.dadosPessoais?.nuemroDocumento}</b></b>
        //             <br></br>
        //             <b className="text-md">Org??o Expeditor: <b className="font-normal">{ascData.dadosPessoais?.orgaoExpeditor}</b></b>
        //             <br></br>
        //             <b className="text-md">Endere??o Pessoal: <b className="font-normal">{ascData.dadosPessoais?.enderecoPessoal}</b></b>
        //             <br></br>
        //             <b className="text-md">N??mero do Endere??o Pessoal: <b className="font-normal">{ascData.dadosPessoais?.numeroEnderecoPessoal}</b></b>
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
        //             <b className="text-md">Raz??o Social: <b className="font-normal">{ascData.dadosProfissionais?.razaoSocial}</b></b>
        //             <br></br>
        //             <b className="text-md">Nome Fantasia: <b className="font-normal">{ascData.dadosProfissionais?.nomeFantasia}</b></b>
        //             <br></br>
        //             <b className="text-md">CNPJ: <b className="font-normal">{ascData.dadosProfissionais?.cnpj}</b></b>
        //             <br></br>
        //             <b className="text-md">N??mero Inscri????o: <b className="font-normal">{ascData.dadosProfissionais?.numeroInscricao}</b></b>
        //             <br></br>
        //             <b className="text-md">Endere??o Sede: <b className="font-normal">{ascData.dadosProfissionais?.enderecoSede}</b></b>
        //             <br></br>
        //             <b className="text-md">N??mero Sede: <b className="font-normal">{ascData.dadosProfissionais?.numeroSede}</b></b>
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