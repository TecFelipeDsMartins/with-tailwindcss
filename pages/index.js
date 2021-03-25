import Head from 'next/head'

export default function Home() {
  return (
    <div className="w-full bg-gray-200 pt-8 px-3 sm:px-0 md:px-3 mt-24 border-t-8">
  <section className="flex flex-col sm:flex-row justify-center -mt-24">
    <article className="sm:flex-1 lg:flex-initial bg-white lg:w-1/4 md:w-1/3 md:rounded-t-lg md:rounded-tr-none flex flex-col mt-0 sm:mt-8 border-t-8 border-gray-500 shadow-lg">
      <h3 className="text-center text-3xl font-bold p-5 text-gray-600">Free</h3>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">1 User</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Unlimited Hours</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Bragging Rights</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">2 Day Log Retention</li>
      </ul>
      <div className="text-center py-8 text-5xl mt-auto">
         <span className="font-bold text-gray-900">$0</span>
       </div>
      <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-gray-600 hover:bg-gray-500 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Sign Up</a>
      </div>
    </article>
  
     <article className="sm:flex-1 lg:flex-initial bg-white lg:w-1/4 shadow-2xl z-30 md:rounded-t-lg mt-8 sm:mt-0 flex flex-col border-t-8 border-green-500">
      <h3 className="text-center text-green-600 text-4xl font-bold p-5">Pro</h3>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">5 Users</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Unlimited Hours</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Bragging Rights</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">2 Day Log Retention</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Bonus Swag</li>
      </ul>
       <div className="text-center py-8 text-xl mt-auto">
         <span className="line-through italic text-gray-600">$99.99</span><br/>
         <span className="font-bold text-gray-900">$69.99 monthly</span>
       </div>
      <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-green-500 hover:bg-green-400 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Sign Up</a>
      </div>
    </article>
    
     <article className="sm:flex-1 lg:flex-initial bg-white lg:w-1/4 md:rounded-t-lg md:rounded-tl-none flex flex-col mt-8 border-t-8 md:border-t-8 border-indigo-500 shadow-lg">
      <h3 className="text-center text-3xl font-bold p-5 text-indigo-600">Teams</h3>
      <ul className="text-center">
        <li className="py-4 border-0 border-gray-light border-b border-solid">1 User</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Unlimited Hours</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">Bragging Rights</li>
        <li className="py-4 border-0 border-gray-light border-b border-solid">2 Day Log Retention</li>
      </ul>
       <div className="text-center py-8 text-xl mt-auto">
       </div>
      <div className="text-center my-8 mt-auto">
        <a href="#" className="inline-block justify-center bg-indigo-500 hover:bg-indigo-400 px-5 py-3 rounded text-white text-xl font-bold shadow-lg">Request Quote</a>
      </div>
    </article>
  </section>
</div>
  )
}
