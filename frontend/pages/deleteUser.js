import Head from 'next/head';
import DeleteUser from "../components/DeleteUser.js";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Axios from "axios";
import React, { useEffect, useState } from 'react';



export default function Home() {

  return (
    <div>

    <DeleteUser/>

    </div>
  )
}