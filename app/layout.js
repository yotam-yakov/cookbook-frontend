/* eslint-disable @next/next/no-head-element */
'use client';
import './globals.css';
import Add from '@/components/Add/Add';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Recipe from '@/components/Recipe/Recipe';
import Message from '@/components/Message/Message';
import useUserStorage from '@/state/useUserStorage';
import useRecipeStorage from '@/state/useRecipeStorage';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import useMessageStorage from '@/state/useMessageStorage';

export default function RootLayout({ children }) {
  const { isLoggedIn, logIn } = useUserStorage((state) => ({
    isLoggedIn: state.isLoggedIn,
    logIn: state.logIn,
  }));
  const isMessageOpen = useMessageStorage((state) => state.isMessageOpen);
  const recipe = useRecipeStorage((state) => state.recipe);

  useEffect(() => {
    if (Cookies.get('jwt')) {
      logIn();
    }
  }, []);

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
        {Object.keys(recipe).length !== 0 && <Recipe {...recipe} />}
        {isMessageOpen && <Message />}
        <Footer />
      </body>
    </html>
  );
}
