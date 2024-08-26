import "../components/Style/Navigation.css";
function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary Navigation">
        <div className="container-fluid Navigation">
          <a className="navbar-brand Navigation " href="#">
            BusScheduler
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Check Duties
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  F&O
                </a>
              </li>
            </ul>
            <button
              type="button"
              class="btn btn-primary"
              style={{
                marginRight: "20px",
                borderRadius: "10px",
                width: "114px",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
