import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { ItemImage } from '../components/Item'
import { useCart } from '../hooks/useCart'

function CartItem({ cartItem, position, onDelete }) {
  return (
    <div className={`flex w-full ${position % 2 !== 0 ? 'bg-gray-100' : ''}`}>
      <Link to={`/p/${cartItem.id}`}>
        <div className="relative w-60 h-60 overflow-hidden">
          <ItemImage product={cartItem} />
        </div>
      </Link>
      <div className="flex flex-col p-6 w-full relative">
        <h2 className="font-semibold text-3xl">{cartItem.title}</h2>
        <div
          className="absolute right-0 top-0 p-4 bg-red-500 text-gray-100 hover:text-white"
          role="button"
          onClick={onDelete}
        >
          
        </div>
        <div className="text-xl font-semibold mt-1 text-indigo-600">
          {cartItem.price.value} {cartItem.price.currencyCode}
        </div>
        <div className="text-2xl font-semibold mt-auto ml-auto">
          <span className="text-indigo-600">
            {cartItem.price.value * cartItem.quantity}{' '}
            {cartItem.price.currencyCode}
          </span>{' '}
          x Unit {cartItem.quantity}
        </div>
      </div>
    </div>
  )
}

export function CartPage() {
  const cart = useCart()

  const carritoTitleEl = (
    <h1 className="mb-6 text-4xl font-semibold"></h1>
  )

  if (cart.isEmpty) {
    return (
      <Fragment>
    
        <div className="flex flex-col justify-center items-center">
        
          <p className="text-3xl">No hay productos en tu carrito</p>

          <Link to="/">
            <Button className="mt-8">Volver a la tienda</Button>
          </Link>
        </div>
      </Fragment>
    )
  }

  return (
    <Fragment>
      {carritoTitleEl}
      <div className="flex w-full">
        <div className="flex flex-col w-[60%] overflow-y-auto h-[720px]">
          {cart.items.map((cartItem, index) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                position={index}
                onDelete={() => cart.removeItem(cartItem.id)}
              />
            )
          })}
        </div>
        
        <div className="flex flex-col flex-1 ml-8">
          <h2 className="mb-8 text-3xl font-semibold">Detalle del precio</h2>
          <div className="flex text-2xl">
            <span className="flex-1 font-semibold">Total</span>
            <span>{cart.total} $</span>
          </div>
          <Button className="mt-8" disabled={cart.length === 0}>
            Finalizar compra
          </Button>
        </div>
      </div>
    </Fragment>
  )
}


