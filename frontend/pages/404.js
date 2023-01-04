import Header from "../components/Header.js";
import Image from 'next/image';



export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">


    <Header />
    <div className='image-container'>
      <h2 className="text-4xl font-bold">Página não encontrada</h2>
    </div>


    </div>
  )
}