import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function TabelaDeServicos(){

      const reload = ()=>{
        window.location.reload();
      }


    return( 
        <div className='bg-assemiper mt-12'>
        
        <div className="mx-auto">

          <div className="sm:-mx-6 lg:-mx-8">
            <div className="py-2 sm:px-6 lg:px-8">
              <div className="py-2">
                <div className="overflow-x-auto">
                    <table className="tg min-w-screen">
                      <thead className="min-w-screen">
                        <tr>
                          <th scope="col" className="tg-k4e5 w-96 text-xl font-medium text-white px-6 py-4 text-left">
                            Serviço
                          </th>
                          <th scope="col" className="tg-k4e5 w-96 text-xl font-medium text-white px-6 py-4 text-left">
                            Preço
                          </th>
                        </tr>
                      </thead>
                    <tbody>
                          <tr className="group whitespace-normal py-5 bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                            <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-6 text-xl font-medium text-white">
                              Emissão de Boleto
                              </td>
                            <td className="tg-dg7a group-hover:bg-slate-300 text-xl text-white border-l font-light px-6 py-4 whitespace-normal">
                              Preço Y
                            </td>
                          </tr>
                          <tr className="group whitespace-normal py-5 bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                            <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-6 text-xl font-medium text-white">
                              Abertura de Empresas</td>
                            <td className="tg-dg7a group-hover:bg-slate-300 text-xl text-white border-l font-light px-6 py-4 whitespace-normal">
                              Gratuito</td>
                          </tr>
                          <tr className="group whitespace-normal py-5 bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                            <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-6 text-xl font-medium text-white">
                              Abertura de MEI
                              </td>
                            <td className="tg-dg7a group-hover:bg-slate-300 text-xl text-white border-l font-light px-6 py-4 whitespace-normal">
                              Gratuito
                              </td>
                          </tr>
                          <tr className="group whitespace-normal py-5 bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                            <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-6 text-xl font-medium text-white">
                              Transformação de MEI
                              </td>
                            <td className="tg-dg7a group-hover:bg-slate-300 text-xl text-white border-l font-light px-6 py-4 whitespace-normal">
                              Preço Z
                              </td>
                          </tr>
                          <tr className="group whitespace-normal py-5 bg-assemiperBlack font-bold border border-assemiperBlack border-l transition duration-100 ease-in-out hover:bg-red-700">
                            <td className="tg-dg7a group-hover:bg-slate-300 px-6 py-6 text-xl font-medium text-white">
                              Demais
                              </td>
                            <td className="tg-dg7a group-hover:bg-slate-300 text-xl text-white border-l font-light px-6 py-4 whitespace-normal">
                              Preço J
                              </td>
                          </tr>
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


export default TabelaDeServicos;