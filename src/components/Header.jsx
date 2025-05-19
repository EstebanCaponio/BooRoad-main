import { NavLink } from "react-router-dom";


export default function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid space ">
                    <a className="navbar-brand" href="#">BOOROAD</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink to='/' end>Viaggi</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/operators' end>Operatori</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contacts'>Contacts</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}