import React from 'react';
function Header(props) {
    return (
        <header>
          <div>
          <h1 className="headerTitle">Alishop</h1>
          <p className="headerText">Магазин китайских товаров для бизнеса</p>
          </div>
          <div className='headerNav'>
          <img src="/cart.png" onClick={props.onClickCart} className='headerCartImg' alt="Cart"/>
          <img src="/favorite.png" className='headerFavoriteImg' alt='Favorites'/>
          <img src="/user.png" className='headerUserImg' alt='User'/>
          </div>
          <button className='profile-btn'>Войти</button>
        </header>
    )
}


export default Header;