import { Routes } from 'react-router-dom'
import './App.css'
import Routers from './Routers'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
    </div>
  )
}

export default App