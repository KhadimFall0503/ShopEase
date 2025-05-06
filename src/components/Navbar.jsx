import { Store,Search,User,ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <div className="navbar">
  <nav className="navbar navbar-expand-lg bg-white shadow-sm w-100 fixed-top">
    <div className="container">
      <a className="navbar-brand text-primary fw-bold fs-2 d-flex align-items-center gap-2" href="#">
        <Store size={28} className="bg-primary text-white fw-bold" />
        ShopEase
      </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-center mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" tabIndex="-1" aria-disabled="true">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" tabIndex="-1" aria-disabled="true">
                  Contact
                </a>
              </li>
            </ul>

            {/* Icône Search alignée à droite */}
            <div className="d-flex align-items-center gap-3">
      <Search size={24} className="ms-3 text-primary fw-bold" />
      <User size={24} className="text-primary fw-bold" />
      
      <div className="position-relative">
        <ShoppingCart size={24} className="text-primary fw-bold" />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </div>
    </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
