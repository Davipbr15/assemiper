import Link from 'next/link';
import Axios from "axios";
import React, { useEffect, useState } from 'react';

function DeleteUser(){

    
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
  const resultado = 0;

  function onSubmit(ev){
      
    ev.preventDefault();
                        
      Axios.post('http://192.168.1.7:3005/api/deleteUser', values)
      .then((response) => {

        console.log(response.status)

      }).catch((error) =>{
        console.log(error)
      });;

      
      
      // const result = response.status;

      // window.alert("Resultado " + result)

      // if(result == 200){
      //   if(window.confirm("Não existe! Deseja criar um novo usuário?")){
      //   window.location.replace('registerUser')
      //   }
      // }else if(result == 202){
      //   window.alert("Este usuário existe!")
      // }else{
      //   window.alert("A")
      // }
  

      // Go to /some/path.
    
  }

    return( 
           
        <div className="App">
            
<div className="relative flex flex-col justify-center min-h-screen">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-2xl font-semibold text-center text-purple-700 underline">
                   Pesquisar se existe
                </h1>
                {}
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
                            onChange={onChange}
                            id="usernameb"
                            placeholder=""
                        />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Checar
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    {" "}
                    <Link href="/">
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                       Login
                    </a>
                </Link>

                </p>
            </div>
        </div>

        </div>

    )

}


export default DeleteUser;