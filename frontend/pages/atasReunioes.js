import Header from "../components/Header.js";
import Atas from "../components/Atas.js";
import React from 'react';



export default function Home() {
  return (
    <div className="App flex">

    <Header/>

    <div className="mx-auto">

    <Atas />

    </div>


    </div>
  )
}