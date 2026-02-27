const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid hstack gap-3">
            <a className="navbar-brand text-warning w-75" href="/">PPAC</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" aria-current="page" href="/service">Service</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#" hidden>Promo</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href="#">Contact</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" hidden>
                        Dropdown link
                    </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
};

export default Header;