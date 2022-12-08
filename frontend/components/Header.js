import Link from 'next/link';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Header(){
  const [result, setResult ] = useState([]);

  useEffect(()=>{
      Axios.post("http://192.168.1.7:3005/api/headerResponse")
      .then(response => {
      setResult(response.status)
      console.log(result)
          
      });

      if (typeof window !== "undefined") {
        window.alert(result)
      }

      var logged = false;
        if(result == 200){
          logged = true;  
        }else{
          if (typeof window !== "undefined") {
              window.location.replace("/")
          }
      }
},[]);
    

      const [navbarOpen, setNavbarOpen] = React.useState(false);
    return( 
           
        <div className="flex bg-gray-700">
        <Link href="/index2">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Index
            </a>
        </Link>
        <Link href="/registrarAssociado">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Registrar Associado
            </a>
        </Link>
        <Link href="/editAssociate">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Editar Associado
            </a>
        </Link>
        <Link href="/showAssociados">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex items-center transition duration-150 ease-in-out"
            >
            Ver
            </a>
        </Link>
        <Link href="/">
            <a
              href="/"
              className="font-medium text-white hover:text-gray-300 px-5 py-3 flex justify-end transition duration-150 ease-in-out"
            >
            Sair
            </a>
        </Link>

        </div>

    )

}

export default Header;