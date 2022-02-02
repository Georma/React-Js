import carrito2 from './picture/carrito2.png'

export function CartWidget(props){
const{numOfItems} = props

return(
<div>
<a href="">
        <button type="button" className="btn  position-relative margeLeft">
          
          <img src={carrito2}/> 
  
       
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{numOfItems}</span>

  </button>
      </a>

</div>
)
}

