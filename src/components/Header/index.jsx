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
        </Link>
        </div>

        <div className='search-bar'>
            <input type='text' placeholder='Buscar Apartamento'/>
            <div className='location'>
                <button className='search-btn'>
                    <ion-icon name="search"></ion-icon>   
                </button>
            </div>
        </div>
      

      {/* Botões*/ }
        <nav className="navbar">
          <ul>
            <li>
              <Link to='/Signin' className='entrarBtn'>Entrar</Link>
            </li>
            <li>
              <Link to='/' className='anunciarBtn'>Anunciar Grátis</Link>
            </li>
          </ul>
        </nav>
    </header>
  )
}
