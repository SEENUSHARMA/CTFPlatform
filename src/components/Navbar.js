import React from 'react';
import '../index.css';

export default function Nav() {
    return(

        <nav className='main-nav flex bg-[#1a2539] text-white h-24 items-center py-4 px-8 '  >
            
                <h1 className="text-5xl font-bold py-4 " >GDSC</h1>
                <div className='ml-auto      '>
                <button
                 className='  bg-white rounded-md font-bold uppercase text-sm px-6 py-3 text-black
                 active:bg-sky-600 hover:bg-white-300 rounded shadow 
                 mr-1 mb-1 '>Log Out</button>
                </div>
        </nav>)
}
