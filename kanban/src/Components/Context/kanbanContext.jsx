import { createContext, useState, useEffect } from "react";

export const KanbanContext = createContext(null)

const initialState = {
    Backlog: [],
    Ready: [],
    'In Progress': [],
    Finished: [],
}

// localStorage
const getInitialState = () => {
    try{
        const saved = localStorage.getItem('kanban')
        if(saved){
            const savedParsed = JSON.parse(saved)
            return savedParsed
        }
    }catch (error) {}

    return { Backlog: [], Ready: [], 'In Progress': [], Finished: [] }
}

//Provider context
export const KanbanProvider = ({children}) => {
    
    const [columns , setColumns] = useState(getInitialState)

    useEffect(() => {
        localStorage.setItem('kanban', JSON.stringify(columns))
    }, [columns])
    
    const addTask = (columName , taskTitle) => {
        setColumns(previous => ({
            ...previous,
            [columName]: [...previous[columName], taskTitle]
        }))
    }

    const moveTask = (taskText, fromColumn, toColumn) => {
        setColumns(previous => ({
            ...previous,
            [fromColumn]: previous[fromColumn].filter(t => t !== taskText),
            [toColumn]: [...previous[toColumn], taskText]
        }))
    }

    return(
        <KanbanContext.Provider value={{columns, addTask, moveTask}}>
            {children}
        </KanbanContext.Provider>
    )
}