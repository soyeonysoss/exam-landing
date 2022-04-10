import React from 'react'
import '../../styles/globals.css'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'


function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default MyApp;
