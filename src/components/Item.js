import { classNames } from '../utils/classNames'

export function ItemImage({ product }) {
  return (
    <div className="absolute inset-0 transform transition hover:scale-125 ease-in-out">
      <img
        src={product.pictureUrl}
        alt={product.title}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export function Item({ product, className }) {
  return (
    <div
      className={classNames(
        className,
        'relative bg-gray-100 z-[1] overflow-hidden'
      )}
    >
       <ItemImage product={product} />
      <div className="absolute bottom-0  items-start border border-secondary rounded">
        <div className="text-md font-bold p-1 bg-white text-black border border-secondary rounded">
        {product.title}
        <br></br>
        Precio: {product.price.value} {product.price.currencyCode}
        <br></br>
        Unidades Disponibles: {product.stock}
        </div>
      </div>
    </div>
  )
}
