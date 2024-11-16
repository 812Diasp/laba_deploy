
import spyLogo from '/src/assets/spy_logo.png'
import './navbar.css'
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <header className="d-flex navbar1 flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/"
                   className="d-flex align-items-center mb-3 mb-md-0 link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover me-md-auto text-decoration-none">
                    <img src={spyLogo} width="64" height="64"/>
                    <span className="ml-5 logo-txt"> Ghoost </span>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><p>
                    <Link className={'link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'} to={'/'}>Главная</Link>
                    </p>
                    </li>

                    <li className="nav-item"><p>
                        <Link to={'/legends'} className={"link-light link-offset-2 link-underline-opacity-25" +
                            " link-underline-opacity-100-hover"}> Легенды и мифы</Link>
                    </p>
                    </li>
                    <li className="nav-item"><p>
                        <Link to={'/info'} className={"link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover\""}>Инфо</Link>
                       </p>
                    </li>
                </ul>
            </header>


        </div>


    )
        ;
};

export default Navbar;