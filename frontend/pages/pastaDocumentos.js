import Header from "../components/Header.js";

import Oficios from "../components/Oficios.js";


export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">


    <Header />

    <div className="mx-auto">
    <Oficios />
    </div>


    </div>
  )
}