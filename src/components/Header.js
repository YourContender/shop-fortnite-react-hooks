function Header() {
    return (
        <nav className='yellow darken-1'>
            <div className='nav-wrapper'>
                <a href='#' className='brand-logo' style={{color: 'black'}}>React Shop</a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='#'>Repo</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header; 