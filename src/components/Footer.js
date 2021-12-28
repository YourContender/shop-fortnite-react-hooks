function Footer() {
    return (
        <footer className='page-footer yellow darken-1'>
            <div className='footer-copyright'>
                <div className='container'>
                    {new Date().getFullYear()} copyright text
                    <a className='grey-text text-lighten-4 right' href='#'> Repo </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;