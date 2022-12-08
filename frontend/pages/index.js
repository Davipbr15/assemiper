import Head from 'next/head';
import Header from "../components/Header.js";
import LoginUser from "../components/LoginUser.js";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Axios from 'axios';




export default function Home() {

useEffect(()=>{
      Axios.post("http://192.168.1.7:3005/")
      .then(response => {
      })
},[]);


  return (
    <div>
      
    <LoginUser />

    </div>
  )
}