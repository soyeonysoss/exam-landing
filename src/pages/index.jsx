import Head from 'next/head';
import Image from 'next/image';
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyApp from './_app';
import SignUpForm from '../components/SignUpForm';

// if (typeof window !== 'undefined') {
//   render(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MyApp />}>
//           <Route path="signup" element={<SignUpForm />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
// }

export default function Home() {
  return (
    <>
      <div className="">
        <Head>
          <title>exam-landing-page</title>
        </Head>
        <MyApp />
      </div>
    </>
  )
}
