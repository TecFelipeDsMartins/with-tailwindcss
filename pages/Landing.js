import React, { Fragment } from 'react'
import Head from 'next/head';
import CardPricing from '../components/CardPricing';

const Landing = () => {
    return (
      <Fragment>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3C4D9B" />
        <meta name="description" content="Etiquetas e rotúlos personalizados com a melhor qualidade da impressão digital."/>
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"></link>
        <title>Etiquetas e rótulos</title>
        </Head>
        <div className="container max-w-full" style={{ backgroundImage: "url('../img/granola.jpg')", backgroundSize:"900px", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
          <section> 
            <div className="container mx-auto ">
              <h1 className="text-center text-5xl text-blue-900 font-medium leading-snug tracking-wider font-serif py-0 " style={{fontFamily: "Pacifico, cursive"}}>
                Etiquetas Adesivas
              </h1>
              <p className="text-center  font-medium text-lg text-blue-900 shadow-xl mt-0 px-6 bg-white bg-opacity-70">
                4cm de diâmetro (redondinha) em Bopp.
              </p>
              <div className="flex flex-wrap justify-center justify-around">
              <CardPricing 
                style={"w-11/12 max-w-md sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4 m-8"}
                styleContainer={"text-sm leading-none rounded-t-lg bg-red-500 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"245"} 
                valor={"86,00"}/>
              <CardPricing 
                style={"w-11/12 max-w-md sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4 m-8"}
                styleContainer={"text-sm leading-none rounded-t-lg bg-yellow-500 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"539"} 
                valor={"119,00"}/>
              <CardPricing 
                style={"w-11/12 max-w-md sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4 m-8"}
                styleContainer={"text-sm leading-none rounded-t-lg bg-pink-400 text-black font-semibold uppercase py-4 text-center tracking-wide"}
                unidade={"1029"} 
                valor={"175,00"}/>  
              </div>
            </div>  
          </section>
        </div>
      </Fragment>
    )
}

export default Landing


{/*w-11/12 max-w-md sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg*/}