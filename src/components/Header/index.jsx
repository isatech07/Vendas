import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <span className="logo-1">R</span>
          <span className="logo-2">O</span>
          <span className="logo-3">T</span>
          <span className="logo-4">A</span>
          <span className="logo-4">S</span>
        </Link>

        <div className='search-bar'>
            <input type='text' placeholder='Buscar Apartamento'/>
            <div className='location'>
                <button className='search-btn'>
                    <ion-icon name="search"></ion-icon>   
                </button>
            </div>
        </div>
      </div>
    </header>
  )
}
