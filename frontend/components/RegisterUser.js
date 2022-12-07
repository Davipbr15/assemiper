import React, { useEffect, useState } from 'react';
import { browserHistory } from 'react-router'

import Link from 'next/link';
import Axios from 'axios';

function RegisterUser(){

    const initialValue = {
        nomeCompletoUserb: '',
        usernameb: '',
        passwordb: '',
      }
      
      const [values, setValues] = useState(initialValue);
      
      
      function onChange(ev) {
      
        const {name, value} = ev.target;
      
        console.log({name, value});
      
        setValues({ ...values, [name]: value });
        
      };

      function onSubmit(ev){
          
        ev.preventDefault();
     
          Axios.post('http://192.168.1.7:3005/api/registerUser', values)
          .then((response) => {
    
          console.log(response.status)

          var result = response.status;

          if(result == 200){
            alert(values.nomeCompletoUserb + " registrado com sucesso!")
            window.location.replace('loginUser')
            }else if(result == 201){
            alert("Senha inválida.")
            }else if(result == 202){
            alert("Senha muito curta.")
            }else if(result == 203){
            alert("Inválido.")
            }else if(result == 204){
            alert("Esse usuário já existe.")
            }else{
            alert("eita")
            }

          

          }).catch((error) =>{
            console.log(error)
          });


      

          
          // Go to /some/path.
        
      }
      

      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 

<div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Register
                </h1>
                <form className="mt-6" action="/loginUser" onSubmit={onSubmit} method="POST">
                <div className="mb-2">
                        <label
                            htmlFor="nomeCompletoUserb"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="nomeCompletoUserb"
                            required
                            id="nomeCompletoUserb"
                            onChange={onChange}
                            placeholder=""
                        /> 
                    </div> 
                    <div className="mb-2">
                        <label
                            htmlFor="usernameb"
                            className="block text-sm font-semibold text-gray-800"
                        > 
                            Usuário
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            name="passwordb"
                            required
                            minLength="5"
                            maxLength="24"
                            id="passwordb"
                            onChange={onChange}
                            placeholder=""
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Registras
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Já tem conta?{" "}
                    <Link href="/loginUser">
                    <a
                    href="/"
                    className="justify-center font-medium text-gray-600 hover:text-purple-700 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    >
                    Logar
                    </a>
                </Link>
                </p>
            </div>
        </div>

    )

}

export default RegisterUser;