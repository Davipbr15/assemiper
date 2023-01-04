import LoginUser from "../components/LoginUser.js";
import React from 'react';
import Axios from 'axios';
import {ipatual} from '../components/ip.js';



export default function Home() {


  const OnCharge = async(ev) =>{
      const resposta = await Axios.post("http://"+ipatual+"/");

      const resultado = resposta.status;

      window.alert(resultado)
  }

  OnCharge();

  return (
    <div className="App">

    <LoginUser />

    </div>
  )
}