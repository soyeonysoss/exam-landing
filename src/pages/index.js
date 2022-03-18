import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import React from "react";
import ReactDOM from "react-dom";
import MyApp from './_app';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>exam-landing-page</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <MyApp />
    </div>
  )
}
