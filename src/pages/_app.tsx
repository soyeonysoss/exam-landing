import React from 'react'
import '../../styles/globals.css'
import { AppProps } from 'next/app'
import Nav from "../components/Nav";
import Main from "../components/Main";
import SignUpForm from '../components/SignUpForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MyApp() {
  return (
    <>
      <Nav />
      {/* <Main /> */}
      <SignUpForm />
    </>
  )
}

export default MyApp;