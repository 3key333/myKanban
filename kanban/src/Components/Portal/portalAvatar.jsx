import { useState } from 'react'
import { createPortal } from 'react-dom'

const usePortal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const openPortal = () => {
        setIsOpen(true)
    }

    const closePortal = () => {
        setIsOpen(false)
    }   

    const Portal = ({children})=>{
        return createPortal(
            <div style={{
                position: 'absolute',
                top: 0,
                left: 305,
                right: 0,
                bottom: 505,
                zIndex: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{ background: 'white', padding: 8, width: 130,}}>
                    {children}
                </div>
            </div>,
            document.getElementById("modal")
        )
    }

    return {isOpen, openPortal, closePortal, Portal}
}

export default usePortal