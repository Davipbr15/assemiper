import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';

function LoginUser(){

    
    const initialValue = {
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
                            
        if (window.confirm("Confirmar Registro?")) {
           
          Axios.post('http://192.168.1.25:3005/api/loginUser', values)
          .then((response) => {


      
          });
    
          // Go to /some/path.
        
        window.location.replace('index2')

        } else {
 
        }
      }
      
      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 

<div className="relative flex flex-col justify-center min-h-screen">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Login
                </h1>
                <form className="mt-6" action="/loginUser" onSubmit={onSubmit} method="POST">
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
                            id="passwordb"
                            onChange={onChange}
                            placeholder=""
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Esqueceu a senha?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Logas
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Não tem conta{" "}
                    <Link href="/registerUser">
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
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