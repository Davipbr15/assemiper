import React,{useState,useEffect} from 'react';
import Header from "../components/Header.js";
import RegisterAssociate from "../components/RegistrarAssociado.js";

import Link from "next/link";


//
function App() {

  return (

    <div className="App flex animate-blur">

    <Header />

    <RegisterAssociate />

    </div>
  );
}

export default App;