/* eslint-disable @next/next/no-head-element */
'use client';
import './globals.css';
import Add from '../components/Add/Add';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import useUserStorage from '../state/useUserStorage';

export default function RootLayout({ children }) {
  const isLoggedIn = useUserStorage((state) => state.isLoggedIn);

  return (
    <html>
      <head>
        <title>Cookbook</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/cookbook.ico' />
      </head>
      <body>
        <Header />
        {children}
        {isLoggedIn && <Add />}
        <Footer />
      </body>
    </html>
  );
}
