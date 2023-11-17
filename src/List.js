import React from 'react';
import { useSelector } from 'react-redux';
import close from './assets/close.png';

const List = () => {
    const tasks = useSelector((state) => state.todoReducer.tasks);
    console.log(tasks);
    return (
        <>
            <ul className='border-t-2 border-b-2'>
                {
                    tasks.map((task, index) => (

                        <li key={index} className='flex justify-between items-center'>
                            <section className='flex gap-2'>
                                <input type='checkbox' />
                                <p>{task.title}</p>
                            </section>
                            <img src={close} alt='close' />
                        </li>

                    ))
                }
            </ul>
        </>
    )
}

export default List