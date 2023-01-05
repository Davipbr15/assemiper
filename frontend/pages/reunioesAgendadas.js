import Link from "next/link.js";
import Header from "../components/Header.js";
import RegisterReuniao from "../components/RegistrarReuniao.js";

export default function Home() {
  return (
    <>
    <div className="App flex bg-assemiperBlack">

    <Header />

    <RegisterReuniao />                       

    </div>
    </>
  )
}