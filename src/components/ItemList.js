import { Link } from 'react-router-dom'
import { Item } from './Item'
import './ItemList.css';

export function ItemList({ products }) {
  return (
    <div className="grid gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/p/${product.id}`}>
            <Item product={product} className="h-80" />
          </Link>
        )
      })}
    </div>
  )
}
