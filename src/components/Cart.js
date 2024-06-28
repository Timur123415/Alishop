function Cart({onCloseCart, onRemove, items = []}) {
    return (
      <div  className="overlay">
        <div className="drawer">
            <button onClick={onCloseCart} className='closeCart'>✖</button>
            <h1>Корзина товаров</h1>
           
           {items.length > 0 ? (
            <>
            <div className="cart-cards">
              <button className="design-btn">Оформить заказ</button>
            <div className='cards'>
            {items.map((obj) => (
              <div key={obj.id} className='drawer-items'>
              <img style={{width: '200px', height: '150px'}} src={obj.img} alt='Item'/>
              <div style={{paddingRight: '15px'}}>
              <h3>{obj.title}</h3>
              <p>{obj.price}руб</p>
              </div>
              <button onClick={() => onRemove(obj.id)} className='btn-delete'>✖</button>
              </div>
            ))}
          
        </div>
        </div>
        <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого: </span>
            <div>...........................</div>
            <b>21 498 руб</b>
          </li>
          <li>
            <span>Налог 20%</span>
            <div>............................</div>
            <b>5000 руб</b>
          </li>
        </ul>
        </div>
        </>
           ) : (
            <div className="cartEmptyImg">
            <img src="/cartEmpty.png" alt="cartEmpty.png"/>
            <p>Ваша корзина пуста</p>
            </div> 
           )}

        </div>
      </div>
    )
}

export default Cart;