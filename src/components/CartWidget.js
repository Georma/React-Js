import { Button } from './Button'

import carrito2 from './picture/carrito2.png'
export function CartWidget({ numOfItems }) {
  return (
    <div className="flex text-white   p-6 h-full justify-center items-center">
        <img src={carrito2}/> 
             <span className="ml-1">{numOfItems}</span>
    </div>
  )
}
