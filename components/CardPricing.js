
import React, { Fragment } from 'react'
import SvgIcon from './SvgIcon'

const CardPricing = (props) => {
    return (
        <Fragment>
             <div className={props.style}>
                <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden bg-opacity-70">
                <div className={props.styleContainer}></div>
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                    <h1 className="text-5xl font-medium uppercase p-3 pb-0 text-center text-gray-500 tracking-wide" >{props.unidade}</h1>
                    <h2 className="text-sm text-gray-500 text-center pb-6">Unidades</h2>
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      <SvgIcon descr={"Resistente a água"}></SvgIcon>
                      <SvgIcon descr={"Próprio p/freezer"}></SvgIcon>
                      <SvgIcon descr={"Recorte Eletrónico"}></SvgIcon>
                      <SvgIcon descr={"Personalizada"}></SvgIcon>
                    </ul>
                    <img className="inline-block w-32 rounded-full ring-white ml-10" src="/img/etiquetaLogo.png" alt="imagem de adesivo redondo"/>
                  </div>
                  <h2 className="text-3xl font-medium uppercase p-3 pb-0 text-center tracking-wide text-green-500 ">R${props.valor}</h2>
                  <div className="block flex items-center p-8  uppercase">
                    <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl bg-green-400 hover:bg-green-500">
                        <a href="https://api.whatsapp.com/send?phone=555131030777&text=Visitei%20sua%20landing%20page%20e%20gostaria%20de%20comprar%20%20etiquetas" target="_blank">Comprar já!</a>
                    </button>
                  </div>
                </div>
              </div> 
        </Fragment>
    )
}


export default CardPricing