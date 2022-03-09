import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NavBar , ItemListContainer , CartWidget} from './components' 
import { CartProvider } from './providers/CartProvider'
import { HomePage } from './pages/Home'
import { CartPage } from './pages/Cart'
import { ProductDetailsPage } from './pages/ProductDetails'
import { CategoryPage } from './pages/Category'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="flex flex-col">
          <NavBar />
          <div className="mt-28 pb-6 mx-auto container">
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/p/:productId">
              <ProductDetailsPage />
            </Route>
            <Route path="/c/:categoryId">
              <CategoryPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}