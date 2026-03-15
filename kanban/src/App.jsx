import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { KanbanProvider } from './Components/Context/kanbanContext'
import Layout from './Components/Layout/layout'
import TaskInfo from './Components/TaskInfo/TaskInfo'

function App() {
  return (
    <KanbanProvider>
      <BrowserRouter basename="/myKanban">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/task" element={<TaskInfo />} />
        </Routes>
      </BrowserRouter>
    </KanbanProvider>
  )
}

export default App
