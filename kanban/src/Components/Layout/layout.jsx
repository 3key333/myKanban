import './layout.scss'
import userAvatar from '../../assets/images/user-avatar.svg'
import arrowDown from '../../assets/images/arrow-down.svg'
import arrowUp from '../../assets/images/arrow-up.svg'
import Card from '../../Components/Cards/card'
import { useState } from 'react'
import usePortal from '../Portal/portal'

const Layout = () => {

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
                <Card title={title}/>
            ))}

        </main>

        <footer>
            <div className="footer-inner">

                <div className="tasks-info">
                    <p>Active tasks: 0</p>

                    <p>Finished tasks: 0</p>
                </div>

                <p>Kanban board by  Ilya, 2026</p>

            </div>
        </footer>
    </>
    )
}

export default Layout