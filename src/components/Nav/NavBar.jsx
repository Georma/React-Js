export function Nav() {
  return  (
  <>
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid text-light">
        <a className="navbar-brand wow pulse" href="">

          <p className="rounded-3 fuenteTitulo">Tulicor.com</p>

        </a>
        <button className="navbar-toggler" type="button primary" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item">
            <a className="nav-link" aria-current="page" href="">Quienes Somos</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="nuestros_productos.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestos Productos
            </a>
            <ul className="dropdown-menu text3" aria-labelledby="navbarDropdown">
             <li><a className="dropdown-item " href="">Cerveza</a></li>
             <li><a className="dropdown-item " href="">Ron</a></li>
             <li><a className="dropdown-item " href="">Pisco</a></li>
             <li><a className="dropdown-item " href="">Vino</a></li>
             <li><a className="dropdown-item " href="">Espumante</a></li>
           </ul>
         </li>

       
         <li className="nav-item">
           <a className="nav-link "  href="">Promociones</a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="">Curiosidades</a>
        </li>
      </ul>

        <form className="d-flex ">

        <button className="btn btn-outline-success colorPersonalizado" type="submit">Buscar</button>
      </form>

      <a href="">
        <button type="button" className="btn  position-relative margeLeft">
      
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </a>
    </div>
  </div>
</nav>

  </>
  )
}