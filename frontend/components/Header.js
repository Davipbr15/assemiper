import Link from 'next/link';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {ipatual} from './ip.js';
import Image from 'next/image';
import "bootstrap-icons/font/bootstrap-icons.css";

function Header(){

  const [result, setResult ] = useState([])

  const ip = ipatual;

  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  
  const [scrollTop, setScrollTop] = React.useState(false);
  useEffect(() => {
  
    window.addEventListener("scroll", () => {
      const scrollMaxValue = () => {
        const body = document.body;
        const html = document.documentElement;
      
        const documentHeight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );
      
        const windowHeight = window.innerHeight;
      
        return documentHeight - windowHeight;
      };
      var tamanhoMax = scrollMaxValue()
      var tamanhoAtual = document.documentElement.scrollTop;
  
      if (tamanhoAtual > (tamanhoMax - (tamanhoMax/2))) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  
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
              // window.location.replace("/")
            }
        }
      }

      onCharge();
  }, []);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNavOpen2, setIsNavOpen2] = useState(false);
  const [isNavOpen3, setIsNavOpen3] = useState(false);
  const [isNavOpen4, setIsNavOpen4] = useState(false);
  const [isNavBanco, setIsNavBanco] = useState(false);
  const [isNavBoletos, setIsNavBoletos] = useState(false);



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
          width={96}
          height={89}
          quality={100}
          alt="Imagem n??o encontrada"
        />
        
          <h1 className="font-bold text-white text-[30px] ml-2">ASSEMIPER</h1>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <h1 className="text-white text-md font-bold">Seja bem-vindo(a)</h1>
      <div className="my-2 bg-gray-600 h-[1px]"></div>
      
      <div className="Home-aba">
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
      </div>
      
      <div className="Associados-aba">
          <div
            className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
            onClick={() => setIsNavOpen((prev) => !prev)}      
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Associados</span>
              <span className="text-sm rotate-180" id="arrow">
              <div className={isNavOpen ? "bi-caret-down" : "bi-caret-up"}>
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
            <Link href="/imprimir">
              <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 rounded-md mt-1">
                Imprimir
              </h1>
            </Link>
          </div>
          </div>
      </div>



      <div className="Servicos-aba">
          <div
            className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
            onClick={() => setIsNavOpen2((prev) => !prev)}      
          >
            <i className="bi bi-bag-fill"></i>
            <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Servi??os</span>
              <span className="text-sm rotate-180" id="arrow">
              <div className={isNavOpen2 ? "bi-caret-down" : "bi-caret-up"}>
              <i className="bi"></i>
              </div>
              </span>
            </div>
          </div>

          <div className={isNavOpen2 ? "show" : "hidden"}>
            <div
            className=" whitespace-nowrap text-left mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
            >

                    <div className="TABELA-DE-SERVICOS">
                      <Link href="/tabelaDeServicos">
                      <div
                        className="p-2.5 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
                      >
                     <i className="bi bi-table"></i>
                        <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Tabela de Servi??os</span>
                        </div>
                      </div>
                      </Link>
                      
                    </div>

                    <div className="BANCO">
                      <div
                        className="p-2.5 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
                        onClick={() => setIsNavBanco((prev) => !prev)}      
                      >
                     <i className="bi bi-bank"></i>
                        <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Banco</span>
                        <span className="text-sm rotate-180" id="arrow">
                          <div className={isNavBanco ? "bi-caret-down" : "bi-caret-up"}>
                          <i className="bi"></i>
              
                          </div>
              
                         </span>
              
                        </div>
            
                      </div>
                      <div className={isNavBanco ? "show" : "hidden"}>
                      <div
                    className="mr-2 whitespace-nowrap text-left w-4/5 mx-auto text-gray-200 font-bold"
                    id="submenu"
                      >
                      <Link href="/cadastroPessoaFisica">
                  
                        <h4 className="whitespace-nowrap cursor-pointer text-sm btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md">
                        <i className="bi bi-file-earmark-person"></i> Pessoa F??sica
                        </h4>
                        </Link>
                        <Link href="/cadastroPessoaJuridica">
                          <h4 className="whitespace-nowrap  cursor-pointer text-sm btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md">
                          <i className="bi bi-file-earmark-person-fill"></i> Pessoa Jur??dica
                          </h4>
                        </Link>
                      </div>
                      </div>
                      
                    </div>

              </div>
             </div>
            </div>
            

            <div className="reuniao-aba">
          <div
            className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
            onClick={() => setIsNavOpen4((prev) => !prev)}      
          >
            <i className="bi bi-chat-left-text-fill"></i>
            <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200 font-bold">Reuni??o</span>
              <span className="text-sm rotate-180" id="arrow">
              <div className={isNavOpen4 ? "bi-caret-down" : "bi-caret-up"}>
              <i className="bi"></i>
              </div>
              </span>
            </div>
          </div>
          <div className={isNavOpen4 ? "show" : "hidden"}>
          <div
            className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
            id="submenu"
          >
            <Link href="/atasReunioes">
              <h1 className="cursor-pointer btn-13 p-2 hover:bg-assemiperBlack rounded-md mt-1">
                Atas
              </h1>
            </Link>
            <Link href="/reunioesAgendadas">
              <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md mt-1">
                Reuni??es Agendadas
              </h1>
            </Link>
          </div>
          </div>
      </div>
            

      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 btn-13 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-assemiperBlack text-white"
        onClick={() => setIsNavOpen3((prev) => !prev)}
      >
        <i className="bi bi-chat-left-text-fill"></i>
        <div className="flex hover:bg-assemiperBlack justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">Outros</span>
          <span className="text-sm rotate-180" id="arrow">
          <div className={isNavOpen3 ? "bi-caret-down" : "bi-caret-up"}>
          <i className="bi"></i>
          </div>
          </span>
        </div>
      </div>
      <div className={isNavOpen3 ? "show" : "hidden"}>
      <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu"
      >
        <Link href="/pastaDocumentos">
          <h1 className="cursor-pointer btn-13 hover:bg-assemiperBlack p-2 placeholder:rounded-md mt-1">
            Documentos
          </h1>
        </Link>

      </div>
      </div>
      <Link href="/loginUser">
      <div
        className="p-2.5 mt-3 btn-13 hover:bg-assemiperBlack flex items-center rounded-md px-4 duration-300 cursor-pointeR text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-sm ml-4 text-gray-200 font-bold">Sair</span>
      </div>
      </Link>
        </div>
      
    </>

    {scrollTop && (
        <button x-data="topBtn" onClick={scrollToTop} id="topButton"
        className="fixed z-50 show p-2 text-black bg-gray-100 rounded-full shadow-md bottom-10 right-5 animate-bounce">
        <i className="bi bi-caret-up"></i>
      </button>
      )}

        </div>

    )

}

export default Header;