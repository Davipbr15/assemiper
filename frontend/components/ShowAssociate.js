import Link from 'next/link';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import {ipatual} from './ip.js';

function ShowAssociate(){
    const [assc, setAssociate ] = useState([]);
    

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

    return( 

        
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
                Naturalidade
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Data de Nascimento
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                CPF
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Documento de identificação
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Número do documento
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Orgão expeditor
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Endereço Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Número do Endereço Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Complemento Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Bairro Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                CEP
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Cidade Estado Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Email Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Telefone Fixo Pessoal
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Celular Pessoal
                </th>


                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Nome Fantasia
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 Razão Social
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                 CNPJ
                </th>
              </tr>
            </thead>
          <tbody>
            {assc.map((ascData, index) => {
              return (
                <tr key={index} className="bg-assemiperBlack font-bold border border-ltransition duration-300 ease-in-out hover:bg-red-700">
                  <td className="px-6 py-4 text-sm font-medium text-white">{ascData.associateId}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.nomeCompleto}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.estadoCivil}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.nacionalidade}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.naturalidade}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.dataDeNascimento}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.cpf}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.documentoIdentificacao}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.numeroDocumento}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.orgaoExpeditor}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.enderecoPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.numeroEnderecoPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.complementoPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.bairroPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.cep}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.cidadeEstadoPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.emailPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.telefoneFixoPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosPessoais?.celularPessoal}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.nomeFantasia}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.razaoSocial}</td>
                  <td className="text-sm text-white border-l font-light px-6 py-4 whitespace-normal">{ascData.dadosProfissionais?.cnpj}</td>
                  
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