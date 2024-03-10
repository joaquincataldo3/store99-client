import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/shared-layout/SharedLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='' element={<SharedLayout />}>
        
      </Route>
    </Routes>
  )
}

export default App
