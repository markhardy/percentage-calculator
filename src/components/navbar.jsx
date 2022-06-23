import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light navbar-inverse">
            <div className="container-fluid">
                <a className="navbar-brand" href="localhost:3000">
                PercentBot{" "}
                <span className='badge badge-pill badge-secondary'>
                </span>
                </a>
            </div>
        </nav>
    );
};

export default NavBar;