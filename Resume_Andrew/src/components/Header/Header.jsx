import './Header.scss'

function Header() {
    return (
        <header className="header">
        <nav className="header__nav">
          <div className="header__logo">
            <a href="#" className="header__logo-link">
              <img src="images/logo.svg" alt="logo" />
            </a>
          </div>
          <ul className="header__menu">
            <li className="header__menu-li">
              <a href="#" className="header__menu-link">Portfolio</a>
            </li>
            <li className="header__menu-li">
              <a href="#" className="header__menu-link">About</a>
            </li>
            <li className="header__menu-li">
              <a href="#" className="header__menu-link">Skills</a>
            </li>
            <li className="header__menu-li">
              <a href="#" className="header__menu-link">Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header