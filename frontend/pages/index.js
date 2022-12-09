import LoginUser from "../components/LoginUser.js";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';




export default function Home() {


  const OnCharge = async(ev) =>{
      const resposta = await Axios.post("http://localhost:3005/");

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