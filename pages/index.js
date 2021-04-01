import React, { Fragment } from 'react'
import Head from 'next/head';
import CardPricing from '../components/CardPricing';

const index = () => {
    return (
      <Fragment>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3C4D9B" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="description" content="Etiquetas e rotúlos personalizados com a melhor qualidade da impressão digital."/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
        
        {/*-- Global site tag (gtag.js) - Google Analytics */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-4DVCQLXDZR" >
        </script>
        <script dangerouslySetInnerHTML={
            { __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", "G-4DVCQLXDZR");
            `}
        }>
        </script>
        
        {/*-- Global site tag (gtag.js) - Google Ads: 401203114 */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-401203114" >
        </script>

        {/*In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button.*/}
        <script dangerouslySetInnerHTML={
            { __html: `
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-401203114/10YZCN-U_PsBEKq_p78B',
                  'event_callback': callback
              });
              return false;
            }

            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5SCG4L5');
            `}
        }>
        </script>


        <title>Etiquetas e rótulos</title>
        </Head>
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SCG4L5"
        style={{display:"none;visibility:hidden"}}></iframe></noscript>
        {/* End Google Tag Manager (noscript)  */}



        <div className="container max-w-full bg-cover bg-no-repeat bg-center bg-fixed bg-gradient-to-r from-red-900" style={{ backgroundImage: "url('../img/granola.jpg')", backgroundBlendMode:"multiply" }}>
          <section> 
            <div className="">
              <h1 className="text-center w-100% text-3xl sm:text-5xl text-blue-900 font-medium leading-snug tracking-wider font-serif py-3 shadow-lg bg-white" style={{fontFamily: "Pacifico, cursive"}}>
                Etiquetas Adesivas
              </h1>
              <p className="text-center  font-medium text-lg text-blue-900 shadow-xl mt-0 px-6 bg-white bg-opacity-70">
                4cm de diâmetro (redondinha) em Bopp.
              </p>
              <div className="flex flex-wrap justify-center justify-around">
              <CardPricing 
                style={"w-full max-w-md sm:w-3/5 lg:w-1/4 sm:my-5 my-6 relative z-0 rounded-lg shadow-lg"}
                styleContainer={"text-sm leading-none rounded-t-lg bg-red-500 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"245"} 
                valor={"86,00"}/>
              <CardPricing 
                style={"w-full max-w-md sm:w-3/5 lg:w-1/4 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg  "}
                styleContainer={"text-sm leading-none rounded-t-lg bg-yellow-500 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"539"} 
                valor={"119,00"}/>
              <CardPricing 
                style={"w-full max-w-md sm:w-3/5 lg:w-1/4 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg  "}
                styleContainer={"text-sm leading-none rounded-t-lg bg-pink-400 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"1029"} 
                valor={"175,00"}/>  
              </div>
            </div>  
          </section>
        </div>
        <footer className="flex justify-center items-center w-100% h-16 bg-blue-900">
            <a className="flex justify-center items-center" href="https://www.ferreiraprintgraf.com.br"><img className="w-32 h-8" src="../img/logobranco.png"/></a>
        </footer>
      </Fragment>
    )
}

export default index


{/*w-11/12 max-w-md sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg*/}