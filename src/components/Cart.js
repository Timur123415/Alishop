function Cart({onCloseCart, items = []}) {
    return (
      <div  className="overlay">
        <div className="drawer">
            <button onClick={onCloseCart} className='closeCart'>✖</button>
            <h1>Корзина товаров</h1>
            {/* <div>
            <img className="cartEmptyImg" src={cartEmptyImg} alt="cartEmpty"/>
            <p>Ваша корзина пуста</p>
            </div> */}
            <div className='cards'>
            {items.map((obj) => (
              <div className='drawer-items'>
              <img style={{width: '200px', height: '150px'}} src={obj.img} alt='Item'/>
              <div style={{paddingRight: '15px'}}>
              <h3>{obj.title}</h3>
              <p>{obj.price}руб</p>
              </div>
              <button className='btn-delete'>✖</button>
              </div>
            ))}

        </div>
        </div>
      </div>
    )
}

export default Cart;