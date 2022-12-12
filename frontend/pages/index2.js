import Head from 'next/head';
import Header from "../components/Header.js";
import LoginUser from "../components/LoginUser.js";
import Dashboard from "../components/Dashboard.js";
import Sidebar from "../components/Sidebar.js";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Homepag from "../public/img/homepage.jpg";



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
        layout="responsive"
        />
    </div>


    </div>
  )
}