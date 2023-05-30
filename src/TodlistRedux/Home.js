import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletTask, setInput, setTasks, editTask, completTask,  } from './slices/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { CheckBox, Close, Edit } from '@mui/icons-material';
import './home.css'


function Home() {
    const dispatch =useDispatch();
    const init = useSelector((state)=>{
        return state.todo;
    })

 function handleSubmit(e){
    e.preventDefault()
    dispatch(setTasks())
 }

 function handleDelet(e, id){
    e.preventDefault()
    dispatch(deletTask(id))
 }

 function handleEdit(e, id){
    e.preventDefault()
    dispatch(editTask(id))
 }
 function handleComplete(e, id){
    e.preventDefault()
    dispatch(completTask(id))
 }

  return ( 
    <div id="todo">
        <form onSubmit={handleSubmit}>
            <input type='text'
            placeholder='Enter your task'
            value={init.input}
            onChange={(e)=> dispatch(setInput(e.target.value)) }
            ></input>
            <button type='submit'>Add </button> 
        </form>
        <ul>
            {
                init.tasks.map((task,id)=>{
                    return <li key={id} className={init.complet.includes(id) ? 'complete': '' }>
                          {task}
                          <a href='' onClick={(e)=> handleComplete(e,id)}><CheckBox/></a>
                        <a href='' onClick={(e)=> handleDelet(e,id)}><DeleteIcon/></a>
                        <a href='' onClick={(e)=> handleEdit(e,id)}><Edit/></a>
                    </li>
                })
            }
        </ul>
    </div>

  )
}

export default Home