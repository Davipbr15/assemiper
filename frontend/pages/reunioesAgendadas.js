import Link from "next/link.js";
import Header from "../components/Header.js";


export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">


    <Header />

    <Link  href="/agendarReunioes">
    <button className="bg-blue-500 h-20 w-32">Agendar</button>
    </Link>                       
    

    <h1>Reuniões Agendadas.</h1>

    </div>
  )
}