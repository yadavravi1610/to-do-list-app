import React from 'react';
import clipboard from './assets/clipboard.png';
import add from './assets/add.png';

const Input = () => {
  return (
    <>
        <div className='flex justify-center'>
            <h1 className='text-6xl font-semibold py-5 font-serif'>To Do List</h1>
        </div>
        <div className='flex justify-center relative border border-black w-[80%] mx-auto h-auto p-6 rounded-lg'>
            <input type='text' placeholder='Type Your Todos' className='border-orange-300 font-semibold text-lg w-[80%] h-10 pl-10 ' />
            <img src={clipboard} className='absolute w-7 left-[12%] top-7' />
            <img src={add} className='absolute w-7 right-[12%] top-[1.9rem]'/>
        </div>
    </>
  )
}

export default Input