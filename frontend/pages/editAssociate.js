import Header from "../components/Header.js";
import EditAssociate from "../components/EditAssociate.js";
import React from 'react';


export default function Home() {

  return (
    <div>
      <div className="App flex">
      
      <Header />

      <div className="mx-auto">
  
      <EditAssociate />

      </div>
  
  
      </div>

    </div>

  )
}