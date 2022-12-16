import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import Header from "../components/Header.js";
import {ipatual} from './ip.js';
import "bootstrap-icons/font/bootstrap-icons.css";

function ImprimirAssociado(){

    const [view, setView] = useState();

    
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
      };
      

      async function dataA(){
        try{
              setDatab({object: { string: "data"}})
              // console.log(imprimir[0].dadosPessoais.dataDeNascimento)
              // let dia  = dataA.getDate().toString();
              // let diaF = (dia.length == 1) ? '0'+dia : dia;
              // let mes  = (dataA.getMonth()+1).toString(); //+1 pois no getMonth Janeiro começa com zero.
              // let mesF = (mes.length == 1) ? '0'+mes : mes;
              // let anoF = dataA.getFullYear();
              // return diaF+"/"+mesF+"/"+anoF
        }catch(err){
          window.alert(err)
        }
      };

      var [dataB, setDatab] = React.useState([]);

      async function getPrintAssociate(value){
        let getAscValue = value;
        window.alert("Imprimir associado de id " + getAscValue)
        if(window.confirm("Confirmar impressão?")){
            window.alert("Imprimindo.")
            setImprimir((prev) => !prev)
            await imprimeAssociate(getAscValue)
            setImprimindo(true)
            dataA()
        }else{
            window.alert("Impressão cancelada.")
        }
        // await editingAssociate(getAscValue);
      }


    return( 
        <>
        {imprimindo &&
        (
        <div className="App2 p-5">
          <h1 className="bg-assemiperRed text-3xl text-white font-bold rounded-xl p-2">Dados Pessoais:</h1>
          {/* <div className="bg-assemiperRed h-1">
          </div> */}
          <div className="flex mt-2">
            <h1 className="text-xl p-2">Nome completo:</h1><h1 className="font-semibold rounded-xl p-2 text-xl">{imprimir[0].dadosPessoais.nomeCompleto}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Estado Civil:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.estadoCivil}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Nacionalidade:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.nacionalidade}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Naturalidade:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.naturalidade}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Data de Nascimento:</h1><h1 className="font-semibold p-2 text-xl">{
              {dataB}
            }</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">CPF:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.cpf}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Profissão:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.profissao}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Documento de Identificação:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.documentoIdentificacao}</h1>
          </div>
          <div className="flex">
            <h1 className="text-xl p-2">Documento de Identificação:</h1><h1 className="font-semibold p-2 text-xl">{imprimir[0].dadosPessoais.documentoIdentificacao}</h1>
          </div>
          <h1 className=""></h1>
        </div>
        )   
        }
        {!imprimindo &&(
        <>
            <Header/>
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
                                      Razão Social
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                     Nome Fantasia
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                     CNPJ
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                     Imprimir
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                {assc.map((ascData, index) => {
                  return (
                    <tr key={index} className="bg-assemiperBlack font-bold border border-ltransition duration-300 ease-in-out text-center hover:bg-red-700">
                      <td className="px-6 py-4 text-sm font-medium text-white">{ascData.associateId}</td>
                      <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-nowrap">{ascData.dadosPessoais?.nomeCompleto}</td>
                      <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.nomeFantasia}</td>
                      <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.razaoSocial}</td>
                      <td className="text-sm text-white border-l border-r font-light px-6 py-4 whitespace-nowrap">{ascData.dadosProfissionais?.cnpj}</td>
                      <td><button name="imprimirAsc" onClick={() => getPrintAssociate(ascData._id)} className="hover:scale-125 transition duration-150 linear text-blue-600 bg-black bg-opacity-50 rounded-full p-2"><i className="bi bi-printer"></i></button></td>
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