import { createContext, useState } from "react";

export const KanbanContext = createContext(null)

const initialState = {
    Backlog: [],
    Ready: [],
    'In Progress': [],
    Finished: [],
}

export const KanbanProvider = ({children}) => {
    
    const [columns , setColumns] = useState(initialState)
    
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