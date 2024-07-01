import React from "react";
import Info from "./Info";
import AppContext from "../context";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function Cart({onCloseCart, onRemove, items = []}) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const {cartItems, setCartItems} = React.useContext(AppContext)
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
    setIsLoading(true);
    const {data} = await axios.post('https://654d178677200d6ba859fa04.mockapi.io/orders', {items: cartItems});
    setOrderId(data.id)
    setIsOrderComplete(true);
    setCartItems([]);

    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      await axios.delete('https://654a3a31e182221f8d52c450.mockapi.io/cart' + item.id);
      await delay(1000);
    }
    
    }catch (error) {
      alert('Ошибка при создании заказа')
    }
    setIsLoading(false);
  }
    return (
      <div  className="overlay">
        <div className="drawer">
            <button onClick={onCloseCart} className='closeCart'>✖</button>
            <h1>Корзина товаров</h1>
           
           {items.length > 0 ? (
            <>
            <div className="cart-cards">
              <button onClick={onClickOrder} disabled={isLoading} className="design-btn">Оформить заказ</button>
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
            <Info title={isOrderComplete ? "Заказ успешно оформлен!" : "Корзина пустая"}
             description={isOrderComplete ? `Ваш #${orderId} заказ скоро будет передан курьерской доставке` : "Добавляйте товары"}
              image={isOrderComplete ? "/accepted.png" : "/cartEmpty.png"}/>
           )}

        </div>
      </div>
    )
}

export default Cart;