
import Header from "../components/Header.js";
import Tabela from "../components/TabelaDeServicos.js";

export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">

    <Header />

    <div className="mx-auto">
      
      <Tabela/>

    </div>  


    </div>
  )
}