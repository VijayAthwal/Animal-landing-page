import React from 'react';


function App() {
  return (
    <>
    <div className='container mx-auto p-2'>
    <div className='flex items-center h-20 justify-between'>
    <div>
       <img  className='h-14 ' src='../Logo.png' alt=''/>
     </div>
     <div className='lg:flex space-x-6 hidden font-bold '>
       <h1 className='cursor-pointer hover:text-gray-400 '>HOME</h1>
       <h1 className='cursor-pointer hover:text-gray-400 '>ANIMALS</h1>
       <h1 className='cursor-pointer hover:text-gray-400 '>SERVICES</h1>
       <h1 className='cursor-pointer hover:text-gray-400 '>CONTACTS</h1>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8  lg:hidden flex " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
    </div>
   <div className='lg:flex justify-between items-center xl:flex 2xl:h-[900px] xl:h-[700px] lg:h-[550px]'>
   <div className='lg:w-1/2 h-[45%] mt-5 mx-auto'>
      <div className='lg:w-1/2  mx-auto'>
      <div className='md:h-16 lg:h-24 xl:h-28 2xl:h-32'>
      <h1 className='text-4xl 2xl:text-5xl font-bold font-[roboto] py-2'>
      Your new friend 
      takeaway 
      </h1>
      </div>
      <div className='md:h-16 lg:h-24 xl:h-28 2xl:h-32'>
      <p className='text-xl 2xl:text-3xl  font-bold font-[roboto] py-2'>
      Online pet store -
Convenient solution when lazy to leave the house
      </p>
      </div>
      <div className=''>
      <button className='bg-gray-800 py-2 mt-2 px-3 xl:px-6 xl:py-4 rounded-sm hover:bg-gray-700 text-white font-bold font-[roboto] '>See Friends </button>
      </div>
      </div>
    </div>
    <div className='lg:w-1/2 mt-4 '>
    <div>
       <img  className='' src='../dog.png' alt=''/>
     </div>
    </div>
   </div>
    </div>
    </>
  );
}

export default App;
