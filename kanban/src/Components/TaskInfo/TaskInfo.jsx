import { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './TaskInfo.scss'
import userAvatar from '../../assets/images/user-avatar.svg'
import arrowDown from '../../assets/images/arrow-down.svg'
import arrowUp from '../../assets/images/arrow-up.svg'
import usePortal from '../Portal/portalAvatar'
import { KanbanContext } from '../Context/kanbanContext'

const TaskInfo = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { taskTitle, column } = location.state || {}
    const { columns } = useContext(KanbanContext)

    const [description, setDescription] = useState('')

    const { openPortal, closePortal, isOpen, Portal } = usePortal()

    const handleArrowClick = (e) => {
        e.preventDefault()
        isOpen ? closePortal() : openPortal()
    }
    return (
        <>
            
            <header>
                <div className='header-inner'>

                    <h1>Awesome Kanban Board</h1>

                    <div className='header-avatar'>

                        <img src={userAvatar}/>
                        
                        <a href="#" onClick={handleArrowClick}> <img src={isOpen ? arrowUp : arrowDown}/> </a>
                        {isOpen && (
                            <Portal>
                                <a className='portal-par profile'>Profile</a>
                                <a className='portal-par log-out'>Log Out</a>
                            </Portal>
                        )}

                    </div>

                </div>
            </header>

            <main>
                <div className="task-info">
                    <div className="task-info-inner">

                        <div className="task-info-head">

                            <h1 className='task-info-text-title'>{taskTitle || 'Задача не выбрана'}</h1>

                            <button className='exit-button' onClick={() => navigate('/')}>✕</button>

                        </div>

                        <div className="task-info-text">
                            <textarea
                                placeholder="This task has no description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="task-info-textarea"
                            />
                        </div>

                    </div>
                </div>
           </main>

            <footer>
                <div className="footer-inner">

                    <div className="tasks-info">
                        <p>Active tasks: {columns.Backlog.length}</p>

                        <p>Finished tasks: {columns.Finished.length}</p>
                    </div>

                    <p>Kanban board by  Ilya, 2026</p>

                </div>
            </footer>
        </>
    )
}

export default TaskInfo