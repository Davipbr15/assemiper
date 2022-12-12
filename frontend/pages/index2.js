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
    <div className="App flex">


    <Header />

      <Image
      src="/img/homepage.jpg"
      width={266670}
      height={15000}
      />

    </div>
  )
}