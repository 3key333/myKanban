import { useState, useContext } from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import { KanbanContext } from '../Context/kanbanContext'


const Card = (props) => {

    const { columns, addTask, moveTask } = useContext(KanbanContext)

    const {
        title,
    } = props

    const [isInputVisible , setInputVisible] = useState(false)

    const changeVisibilityForInputOnTrue = () => {
        setInputVisible(true)
    }

    const changeVisibilityForInputOnFalse = (e) => {
        if(e.key === 'Enter'){
            if(e.target.value.trim() !== ''){
                setInputVisible(false)
                addTask('Backlog', e.target.value.trim())
            }else(
                alert('Введите название!')
            )
        }
    }

    const [isOpenDropDown , setDropDown] = useState(false)

    const handlerClickOpenDropDown = () => {
        setDropDown(isOpenDropDown!=true)
    }

    return(
        <div className="card">
            <div className="card-inner">

                <div className="card-title">
                    {title}                     
                </div>

                <div className="card-tasks">
                    {(columns[title] || []).map((task, index) => (
                        <Link key={index} to='/task' state={{ taskTitle: task, column: title }} className="task-link">
                            <div className="task">{task}</div>
                        </Link>
                    ))}
                </div>

                <div className="card-button">

                    {/* ДЛЯ КАРТОЧКИ BACKLOG */}

                    {title==='Backlog' ? <button onClick={changeVisibilityForInputOnTrue}>+ Add task</button> : <></>}
                    {isInputVisible===true ? 
                    <input key={title} className='title-task_input' type='text' onKeyDown={changeVisibilityForInputOnFalse} placeholder='Введите название...'/> : 
                    <></>
                    }

                    {/* ДЛЯ КАРТОЧКИ READY  */}

                    {title==='Ready' ?
                     <button onClick={handlerClickOpenDropDown} disabled={columns.Backlog.length === 0}>
                        {isOpenDropDown===true?'Close':'Open'}
                     </button> : <></>}

                    {title==='Ready' && isOpenDropDown ?
                    <div className='ready-dropDown'>
                        {(columns['Backlog'] || []).map((task, index) => (
                            <div className='dropdown-item' key={index} onClick={() => { moveTask(task, 'Backlog', 'Ready'); setDropDown(false); }}>
                                {task}
                            </div>
                        ))}
                    </div> : 
                    <></>}
                    
                    {/* ДЛЯ КАРТОЧКИ In Progress */}

                    {title==='In Progress' ?
                     <button onClick={handlerClickOpenDropDown} disabled={columns.Ready.length === 0}>
                        {isOpenDropDown===true?'Close':'Open'}
                     </button> : <></>}

                    {title==='In Progress' && isOpenDropDown ?
                    <div className='ready-dropDown'>
                        {(columns['Ready'] || []).map((task, index) => (
                            <div className='dropdown-item' key={index} onClick={() => { moveTask(task, 'Ready', 'In Progress'); setDropDown(false); }}>
                                {task}
                            </div>
                        ))}
                    </div> : 
                    <></>}

                    {/* ДЛЯ КАРТОЧКИ In Progress */}

                    {title==='Finished' ?
                     <button onClick={handlerClickOpenDropDown} disabled={columns['In Progress'].length === 0}>
                        {isOpenDropDown===true?'Close':'Open'}
                     </button> : <></>}

                    {title==='Finished' && isOpenDropDown ?
                    <div className='ready-dropDown'>
                        {(columns['In Progress'] || []).map((task, index) => (
                            <div className='dropdown-item' key={index} onClick={() => { moveTask(task, 'In Progress', 'Finished'); setDropDown(false); }}>
                                {task}
                            </div>
                        ))}
                    </div> : 
                    <></>}
                    
                </div>
            </div>
        </div>
    )
}

export default Card