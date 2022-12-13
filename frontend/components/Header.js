import Link from 'next/link';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {ipatual} from './ip.js';
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(){

  const [result, setResult ] = useState([])

  const ip = ipatual;

  console.log(ip);
  useEffect(() => {
    const onCharge = async(ev) => {

      try{
        const resposta = await Axios.get('http://'+ ip +'/api/headerResponse');
        var result = resposta?.status;
      }catch(error){
          console.log(error);
      }
        // Go to /some/path.
        console.log(result)
          if(result == 200){
            window.alert("Licitamente Licito")
          }else{
            if (typeof window !== "undefined") {
              // window.alert("Rapa Fora")
              //   window.location.replace("/")
            }
        }
      }

      onCharge();
  }, []);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavOpen2, setIsNavOpen2] = useState(false);


    return( 
          
        <div className="flex">
          <>
        <div
      className="sidebar overflow-y-hidden sticky top-0 bottom-0 lg:left-0 p-2 w-[300px] h-screen text-center bg-assemiperBlack"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
        <Image 
          src="/img/logo.png"
          width={77}
          height={77}
          alt="Imagem não encontrada"
        />
        
          <h1 className="font-bold text-gray-200 text-[20px] ml-2">ASSEMIPER</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <h1 className="text-white text-md font-bold">Seja bem-vindo(a)</h1>
      <div className="my-2 bg-gray-600 h-[1px]"></div>
      
      <div>
      </div>
      <div
        className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 hover:bg-assemiperBlack cursor-pointer text-white"
      >
        <i className="bi bi-house-door-fill"></i>
        <Link href="/index2">
            <a
              className="text-[15px] ml-4 text-gray-200 font-bold"
            >
            Home
            </a>
        </Link>
      </div>
      
      <div
        className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
        onClick={() => setIsNavOpen((prev) => !prev)}      
       >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Associados</span>
          <span className="text-sm rotate-180" id="arrow">
          <div className={isNavOpen ? "bi-chevron-down" : "bi-chevron-up"}>
          <i className="bi"></i>
          </div>
          </span>
        </div>
      </div>
      <div className={isNavOpen ? "show" : "hidden"}>
      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu"
      >
        <Link href="/showAssociados">
          <h1 className="cursor-pointer btn-13 p-2 hover:bg-assemiperBlack rounded-md mt-1">
            Exibir
          </h1>
        </Link>
        <Link href="/registrarAssociado">
          <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md mt-1">
            Registrar
          </h1>
        </Link>
        <Link href="/editAssociate">
          <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 rounded-md mt-1">
            Editar
          </h1>
        </Link>
      </div>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
        onClick={() => setIsNavOpen2((prev) => !prev)}
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Outros</span>
          <span className="text-sm rotate-180" id="arrow">
          <div className={isNavOpen2 ? "bi-chevron-down" : "bi-chevron-up"}>
          <i className="bi"></i>
          </div>
          </span>
        </div>
      </div>
      <div className={isNavOpen2 ? "show" : "hidden"}>
      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu"
      >
        <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md mt-1">
          Documentos
        </h1>
        <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 rounded-md mt-1">
          Imprimir
        </h1>
        <h1 className="cursor-pointer btn-13 p-2 hover:bg-assemiperBlack rounded-md mt-1">
          Relação
        </h1>
      </div>
      </div>
      <Link href="/">
      <div
        className="p-2.5 mt-3 btn-13 hover:bg-assemiperBlack flex items-center rounded-md px-4 duration-300 cursor-pointeR text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-sm ml-4 text-gray-200 font-bold">Sair</span>
      </div>
      </Link>
        </div>
      
    </>
        </div>

    )

}

export default Header;