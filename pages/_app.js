import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import React from 'react';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
    #__next {
        flex: 1;
        display: flex;
        flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Quiz Alura - Game Of Thrones</title>
        <meta name="title" content="Quiz Alura - Game Of Thrones" key="title" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="description" content="Teste seus conhecimentos sobre as Crônicas de Gelo e Fogo." key="twitter.description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" key="og.type" />
        <meta property="og:url" content="https://aluraquizgot.vercel.app/" key="og.url" />
        <meta property="og:title" content="Quiz Alura - Game Of Thrones" key="og.title" />
        <meta property="og:description" content="Teste seus conhecimentos sobre as Crônicas de Gelo e Fogo." key="og.description" />
        <meta property="og:image" content="https://ninfacrocodilo.com/wp-content/uploads/2019/05/game-of-thrones-poster_85627-1920x1200.01.jpg" key="og.image" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" key="twitter.card" />
        <meta property="twitter:url" content="https://aluraquizgot.vercel.app/" key="twitter.url" />
        <meta property="twitter:title" content="Quiz Alura - Game Of Thrones" key="twitter.title" />
        <meta property="twitter:description" content="Teste seus conhecimentos sobre as Crônicas de Gelo e Fogo." key="twitter.description" />
        <meta property="twitter:image" content="https://ninfacrocodilo.com/wp-content/uploads/2019/05/game-of-thrones-poster_85627-1920x1200.01.jpg" key="twitter.image" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
