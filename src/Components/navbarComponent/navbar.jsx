
import spyLogo from '/src/assets/spy_logo.png'
import './navbar.css'
const Navbar = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover me-md-auto text-decoration-none">
                    <img src={spyLogo} width="64" height="64"/>
                    <span className="ml-5 logo-txt"> |Classified Mistics| </span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><p><a href="/"
                                                       className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        Главная</a></p>
                    </li>

                    <li className="nav-item"><p><a href="/legends"
                                                       className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        Легенды и мифы</a></p>
                    </li>
                    <li className="nav-item"><p><a href="/facts"
                                                       className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        Случайные факты</a></p>
                    </li>
                    <li className="nav-item"><p><a href="/info"
                                                       className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        Инфо</a></p>
                    </li>
                </ul>
            </header>


        </div>


    )
        ;
};

export default Navbar;