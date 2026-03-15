
import './App.css'
import { KanbanProvider } from './Components/Context/kanbanContext'
import Layout from './Components/Layout/layout'

function App() {
  return (
    <>
      <KanbanProvider>
        <Layout/>
      </KanbanProvider>
    </>
  )
}

export default App
