import cartEmptyImg from '../assets/cartEmpty.png';
import bag from '../assets/img/bag.webp';
function Cart(props) {
    return (
      <div  className="overlay">
        <div className="drawer">
            <button onClick={props.onCloseCart} className='closeCart'>✖</button>
            <h1>Корзина товаров</h1>
            {/* <div>
            <img className="cartEmptyImg" src={cartEmptyImg} alt="cartEmpty"/>
            <p>Ваша корзина пуста</p>
            </div> */}
            <div className='cards'>
            <div className='drawer-items'>
            <img style={{width: '200px', height: '150px'}} src={bag} alt='Item'/>
            <div style={{paddingRight: '15px'}}>
            <h3>Сумка Fashion</h3>
            <p>12000руб</p>
            </div>
            <button className='btn-delete'>✖</button>
            </div>




            <div className='drawer-items'>
            <img style={{width: '200px', height: '150px'}} src={bag} alt='Item'/>
            <div style={{paddingRight: '15px'}}>
            <h3>Сумка Fashion</h3>
            <p>12000руб</p>
            </div>
            <button className='btn-delete'>✖</button>
            </div>

            <div className='drawer-items'>
            <img style={{width: '200px', height: '150px'}} src={bag} alt='Item'/>
            <div style={{paddingRight: '15px'}}>
            <h3>Сумка Fashion</h3>
            <p>12000руб</p>
            </div>
            <button className='btn-delete'>✖</button>
            </div>

            <div className='drawer-items'>
            <img style={{width: '200px', height: '150px'}} src={bag} alt='Item'/>
            <div style={{paddingRight: '15px'}}>
            <h3>Сумка Fashion</h3>
            <p>12000руб</p>
            </div>
            <button className='btn-delete'>✖</button>
            </div>

</div>
        </div>
      </div>
    )
}

export default Cart;