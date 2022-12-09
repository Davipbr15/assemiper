import Head from 'next/head';
import Header from "../components/Header.js";
import LoginUser from "../components/LoginUser.js";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';




export default function Home() {


  const OnCharge = async(ev) =>{
      const resposta = await Axios.post("http://localhost:3005/");

      const resultado = resposta.status;

      window.alert(resultado)
  }

  OnCharge();

  return (
    <div>
      
    

    <LoginUser />

    </div>
  )
}