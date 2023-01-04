import Header from "../components/Header.js";
import Image from 'next/image';



export default function Home() {
  return (
    <div className="App flex bg-assemiperBlack">


    <Header />
    <div className='image-container'>
      <Image
        src="/img/homepage.jpg"
        alt="Imagem não encontrada"
        className='image'
        width={1000}
        height={540}
        quality={100}
        layout="responsive"
        />
    </div>


    </div>
  )
}