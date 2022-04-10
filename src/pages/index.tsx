import Head from 'next/head';
import Image from 'next/image';
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Nav from '../components/Nav';
import Main from '../components/Main';

function Home() {
  
  return (
    <RecoilRoot>
      <Nav />
      <Main />
    </RecoilRoot>    
  )
}

export default Home;