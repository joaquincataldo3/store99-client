import { Route, Routes } from 'react-router-dom'
import { SharedLayout } from './components/shared-layout/SharedLayout'
import { ShoeList } from './views/ShoeList'
import './App.css'
import { Home } from './views/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element = {<Home />} />
        <Route path='list' element={<ShoeList />} />
      </Route>
    </Routes>
  )
}

export default App
