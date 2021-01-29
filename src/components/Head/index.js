import Head from 'next/head'

export default function Layout() {
  return (
    <>
      <Head>
        <title>Quiz Game Of Thrones</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8"></meta>
        {/* Tags do Facebook */}
        <meta property="og:title" content="Quiz Game Of Thrones" key="og.title" />
        <meta property="og:url" content="https://aluraquizgot.vercel.app/" key="og.url"></meta>
        <meta property="og:image" content="https://ninfacrocodilo.com/wp-content/uploads/2019/05/game-of-thrones-poster_85627-1920x1200.01.jpg" key="og.image" />
        <meta property="og:type" content="website" key="og.type"/>
        <meta property="og:description" content="Teste seus conhecimentos nesse quiz sobre Game Of Thrones" key="og.description"/>
        <meta property="og:locale" content="pt_BR" key="og.locale"/>
        {/* Tags do Twitter */}
        <meta name="twitter:title" content="Quiz Game Of Thrones" key="twitter.title" />
        <meta name="twitter:description" content=" Offering tour packages for individuals or groups." key="twitter.description"/>
        <meta name="twitter:image" content=" http://euro-travel-example.com/thumbnail.jpg" key="twitter.image" />
        <meta name="twitter:card" content="summary_large_image" key="twitter.card"/>

      </Head>
     
    </>
  )
}