import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-100 pt-8 px-3 sm:px-0 md:px-3 mt-24 border-t-8" style={{backgroundImage: "url('/img/granola.jpg')", backgroundSize:"900px", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundAttachment:"fixed"}}>
  <section className="flex flex-col sm:flex-row justify-center -mt-24">
    <article className="sm:flex-1 lg:flex-initial bg-white bg-opacity-50 lg:w-1/4 md:w-1/3 md:rounded-t-lg md:rounded-tr-none flex flex-col mt-0 sm:mt-8 border-t-8 border-gray-500 shadow-lg">
      <img className="inline-block w-28 rounded-full ring-white" src="/img/etiquetaLogo.png" alt=""/>
      <h3 className="text-center text-5xl font-bold p-5 pb-0 text-gray-600">245</h3>
      <span className="text-center font-bold text-gray-600 ">unidades</span>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">Resistente a água</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Próprio p/freezer</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Recorte Eletrónico</li>
      </ul>
      <div className="text-center py-7 text-3xl mt-auto">
         <span className="font-bold text-gray-900">R$86,00</span>
       </div>
      <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-green-600 hover:bg-gray-500 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Compre agora!</a>
      </div>
    </article>
  
     <article className="sm:flex-1 lg:flex-initial bg-white bg-opacity-50 lg:w-1/4 shadow-2xl z-30 md:rounded-t-lg mt-8 sm:mt-0 flex flex-col border-t-8 border-green-500 h-4/5">
     <h3 className="text-center text-5xl font-bold p-5 pb-0 text-green-600">539</h3>
      <span className="text-center font-bold text-green-600 ">unidades</span>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">Resistente a água</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Próprio p/freezer</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Recorte Eletrónico</li>
      </ul>
      <div className="text-center py-7 text-3xl mt-auto">
         <span className="font-bold text-gray-900">R$119,00</span>
       </div>
       <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-green-600 hover:bg-gray-500 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Compre agora!</a>
      </div>
    </article>
    
     <article className="sm:flex-1 lg:flex-initial bg-white bg-opacity-50 lg:w-1/4 md:rounded-t-lg md:rounded-tl-none flex flex-col mt-8 border-t-8 md:border-t-8 border-indigo-500 shadow-lg">
     <h3 className="text-center text-5xl font-bold p-5 pb-0 text-blue-600">1029</h3>
      <span className="text-center font-bold text-blue-600 ">unidades</span>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">Resistente a água</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Próprio p/freezer</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Recorte Eletrónico</li>
      </ul>
      <div className="text-center py-7 text-3xl mt-auto">
         <span className="font-bold text-gray-900">R$175,00</span>
       </div>
       <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-green-600 hover:bg-gray-500 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Compre agora!</a>
      </div>
    </article>
  </section>
</div>
  )
}
