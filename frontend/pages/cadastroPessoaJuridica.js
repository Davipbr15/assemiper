
import Header from "../components/Header.js";
import CPF from "../components/CadastroPessoaJuridica.js";
export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">

    <Header />



    <div className="mx-auto">
      <CPF/>
    </div>

    </div>
  )
}