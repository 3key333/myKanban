import './layout.scss'
import userAvatar from '../../assets/images/user-avatar.svg'
import arrowDown from '../../assets/images/arrow-down.svg'
import arrowUp from '../../assets/images/arrow-up.svg'
import Card from '../../Components/Cards/card'
import { useState } from 'react'
import usePortal from '../Portal/portalAvatar'
import { useContext } from 'react'
import { KanbanContext } from '../Context/kanbanContext'

const Layout = () => {

    const { columns } = useContext(KanbanContext)
    console.log(columns.Backlog.length)

    const cardsData = ['Backlog', 'Ready', 'In Progress', 'Finished']

    const { openPortal, closePortal, isOpen, Portal } = usePortal()

    const handleArrowClick = (e) => {
        e.preventDefault()
        isOpen ? closePortal() : openPortal()
    }

    return(
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

            {cardsData.map((title) => (
                <Card key={title} title={title}/>
            ))}

        </main>

        <footer>
            <div className="footer-inner">

                <div className="tasks-info">
                    <p>Active tasks: {columns.Backlog.length}</p>

                    <p>Finished tasks: {columns['Finished'].length}</p>
                </div>

                <p>Kanban board by  Ilya, 2026</p>

            </div>
        </footer>
    </>
    )
}

export default Layout