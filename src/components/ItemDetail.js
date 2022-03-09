import { ItemCount } from './ItemCount'
import { useCart } from '../hooks/useCart'

export function ItemDetail({ product }) {
  const cart = useCart()

  const cartItem = cart.getItem(product.id)

  function onAddToCart(quantity) {
    cart.addItem({ ...product, quantity })
  }

  return (
    <div className="flex">
      <div className="relative w-1/2 bg-gray-100 ">
       
        <div className="h-[600px]">
          <img
            className="h-full w-full object-cover border border-secondary rounded"
            src={product.pictureUrl}
            alt={product.title}
            
          />
        </div>
      </div>
     
      <div className=" w-1/2 px-10 pt-5 flex flex-col ">
            <div className="text-4xl font-bold mb-1 ">{product.title}</div>
        <div className="text-2xl font-bold mb-1">Precio: {product.price.value} {product.price.currencyCode} c/u </div>
        <div className="text-2xl font-bold mb-4">Unidades disponibles: {product.stock} </div>
      
        <div
          className="text-xl prose"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <div className="flex justify mt-auto">
          <div className="">
            <ItemCount
              initialValue={cartItem?.quantity}
              maxValue={product.stock}
              onAdd={onAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
