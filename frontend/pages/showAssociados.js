import React from 'react';
import Header from "../components/Header.js";
import ShowAssociate from "../components/ShowAssociate.js";
//
function App() {

  return (

    <div className="App flex">
    
    <Header />

    <div className='mx-auto'>

    <ShowAssociate />

    </div>

    </div>
  );
}

export default App;