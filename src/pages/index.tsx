import Head from 'next/head';
import Image from 'next/image';
import React from "react";
import Nav from '../components/Nav';
import Main from '../components/Main';

function Home() {
  return (
    <>
      <Nav />
      <Main />
    </>
  )
}

export default Home;