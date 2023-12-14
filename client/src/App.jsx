import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TasksPage } from '../src/pages/TasksPage'
import { TaskFormPage } from '../src/pages/TaskFormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TaskFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App