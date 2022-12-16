import Axios from 'axios';
import React, { useEffect, useState } from 'react';

// function ip(){
// var [ip, setIP ] = useState([]);

// useEffect(() => {
  
//     async function fetchIP(){
//       try{
        
//       const resposta = await Axios.get('http://localhost:3005/api/ipConfig')
//       setIP(resposta?.data)
//       }catch(error){
//         console.log(error);
//       }
//     };
  
//     fetchIP();
//   }, []);

//   console.log(ip)
// }
var ip = '192.168.1.13:3005'
export const ipatual = ip;
