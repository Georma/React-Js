import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { CartWidget } from './CartWidget'
import './NavBar.css';

const categories = [
  { id: 'todos', name: 'Todos los productos' },
  { id: 'cerveza', name: 'Cerveza' },
  { id: 'vino', name: 'Vino' },
]

export function NavBar() {
  const cart = useCart()

  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <header className="flex h-14 bg-red-900 fixed top-0 w-full z-10">
      <div className="flex container mx-auto items-center px-6 md:px-0 justify-between md:justify-start">
        <div
          className="text-white ml-4 md:hidden"
          role="button"
          onClick={() => setIsMenuVisible(true)}
        >
         
        </div>
        <Link to="/">
          <h3 className="hidden lg:inline-block font-bold text-white text-3xl rounded-3 fuenteTitulo">
            TuLicor.com
          </h3>
          <h3 className=" inline-block lg:hidden text-white ">
          
          </h3>
        </Link>
        <nav className="space-x-6 ml-auto hidden md:flex font-bold">
          {categories.map((category) => {
            return (
              <NavLink
                key={category.name}
                exact
                activeClassName="text-white nav-link"
                className=" text-black  nav-link text-xl  py-1 px-2"
                to={category.id === 'todos' ? '/' : `/c/${category.id}`}
              >
                {category.name}
              </NavLink>
            )
          })}
        </nav>
        <div className=" nav-link flex h-16 md:ml-8">
          <Link to="/cart">
            <CartWidget numOfItems={cart.length} />
          </Link>
        </div>
      </div>
      {isMenuVisible && (
        <aside className=" fixed bg-gray-100 h-screen w-full p-8 flex items-center justify-center">
          <div
            className="absolute top-10 right-10"
            role="button"
            onClick={() => setIsMenuVisible(false)}
          >
       
          </div>
          <nav className="space-y-10 flex flex-col items-center">
            {categories.map((category) => {
              return (
                <NavLink
                  key={category.name}
                  onClick={() => setIsMenuVisible(false)}
                  exact
                  activeClassName="font-bold  text-white"
                  className="text-3xl uppercase py-1 px-2"
                  to={category.id === 'todos' ? '/' : `/c/${category.id}`}
                >
                  {category.name}
                </NavLink>
              )
            })}
          </nav>
        </aside>
      )}
    </header>
  )
}
