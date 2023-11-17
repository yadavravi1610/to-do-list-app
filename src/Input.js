import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import clipboard from './assets/clipboard.png';
import add from './assets/add.png';
import seen from './assets/seen.png';
import { addTotasks } from './Redux/todoSlice';
import List from './List';

const Input = () => {
    const [addButton, setAddButton] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    // const tasks = useSelector((state)=>state.todoReducer.tasks);
    // console.log(tasks);

    function handleShow(e) {
        setInputValue(e.target.value);
        // console.log(inputValue);
        if (e.target.value) {
            setAddButton(true);
        }
        else {
            setAddButton(false);
        }
    }

    function handleClick(){
        dispatch(addTotasks({
            title: inputValue,
            id: Date.now(),
            completed: false,
        }));
        setInputValue('');
    }
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='text-6xl font-semibold py-5 font-serif'>To Do List</h1>
            </div>
            <div className='flex justify-center flex-col relative border border-black w-[80%] mx-auto h-auto p-6 rounded-lg'>
                <div className='flex justify-center'>
                    <img src={clipboard} alt='clipboard' className='absolute w-7 left-[12%] top-7' />
                    <input type='text' value={inputValue} placeholder='Type Your Todos' onChange={handleShow} className='border-orange-300 font-semibold text-lg w-[80%] h-10 pl-10 rounded-md ' />
                    {
                        addButton && <img src={add} alt='addtask' onClick={handleClick} className='absolute w-7 right-[12%] top-[1.9rem]' />
                    }
                </div>
                <div className='flex justify-between mx-28 my-2'>
                    <div className='flex'>
                        <img src={seen} alt='completetask' className='' />
                        <button>Complete all tasks</button>
                    </div>
                    <div>
                        <button>Clear Completed</button>
                    </div>
                </div>
                <div className='mx-28'>
                    <List />
                </div>
                <div className='flex justify-between mt-3'>
                    <div>
                        <p><span>0</span> task left</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>All</p>
                        <p>Completed</p>
                        <p>UnCompleted</p>    
                    </div>    
                </div>    
            </div>
        </>
    )
}

export default Input