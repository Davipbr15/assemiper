import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import {ipatual} from './ip.js';
import "bootstrap-icons/font/bootstrap-icons.css";

function LoginUser(){

    const [view, setView] = useState();

    
    const initialValue = {
        usernameb: '',
      }
      
      const [values, setValues] = useState(initialValue);
      
      
      function onChange(ev) {
      
        const {name, value} = ev.target;
      
        console.log({name, value});
      
        setValues({ ...values, [name]: value });
        
      };

      function onEsqueceu(){

            window.alert("vai ficar pra jesus em...")

            window.location.replace("deleteUser")

      }

      const onSubmit = async(ev) => {
          
        ev.preventDefault();

        try{

          const resposta = await Axios.post('http://'+ipatual+'/api/loginUser', values); 

          var result = resposta?.status;

          console.log(result)
        
        }catch(error){
            console.log(error);
        }

        console.log("Resultado " + result);
          
          if(result == 200){
            window.alert("Usuário Logado com Sucesso!")
            window.location.replace('index2')
          }else if(result == 201){
            window.alert("Senha ou usuários incorretos!");
          }else if(result == 202){
            window.alert("Digite a senha!")
          }else if(result == 203){
            window.alert("Digite o usuário!")
          }else{
            window.alert("Erro!")
          }

          
    
          // Go to /some/path.
        
      }
    
      
       
      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 

<div className="relative flex flex-col justify-center min-h-screen">
            <div className="w-full p-6 m-auto bg-assemiperBlack shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-assemiperRed">
                   Login
                </h1>
                <form className="mt-6" action="/loginUser" onSubmit={onSubmit} method="POST">
                    
                    <div className="mb-2">
                        <label
                            htmlFor="usernameb"
                            className="block text-sm font-semibold text-white"
                        >
                            Usuário
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-assemiperBlack bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="usernameb"
                            required
                            id="usernameb"
                            onChange={onChange}
                            placeholder=""
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="passwordb"
                            className="block text-sm font-semibold text-white"
                        >
                            Senha
                        </label>
                        <input
                            type={view ? "text" : "password"}
                            className="block w-full px-4 py-2 mt-2 text-assemiperBlack bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="passwordb"
                            required
                            minLength="5"
                            maxLength="24"
                            id="passwordb"
                            onChange={onChange}
                            placeholder=""
                        />
                    </div>
                    <div onClick={() => setView((prev) => !prev)} className="pt-2 pb-2 text-sm text-assemiperRed">
                    
                    <i className={view ? "bi bi-eye" : "bi bi-eye-slash"} id="togglePassword"></i> Mostrar Senha
                    </div>
                    <hr></hr>
                    <div className="pt-2">
                        <a
                            href="#"
                            onClick={onEsqueceu}
                            className="text-xs text-assemiperRed hover:underline"
                        >
                            Esqueceu a senha?
                        </a>
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-assemiperRed rounded-md hover:bg-gray-900 focus:outline-none focus:bg-red-700">
                            Logar
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Não tem conta{" "}
                    <Link href="/registerUser">
                    <a
                        href="#"
                        className="font-medium text-assemiperRed hover:underline"
                    >
                       Registrar
                    </a>
                </Link>

                </p>
            </div>
        </div>

    )

}

export default LoginUser;