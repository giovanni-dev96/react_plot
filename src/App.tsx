import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { pages } from './routes'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
      </Routes>
    </>
  )
}

export default App
