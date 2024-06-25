import React from 'react';
import cartImg from '../assets/cart.png';
import userImg from '../assets/user.png';
import favoriteImg from '../assets/favorite.png';
function Header(props) {
    return (
        <header>
          <div>
          <h1 className="headerTitle">Alishop</h1>
          <p className="headerText">Магазин китайских товаров для бизнеса</p>
          </div>
          <div className='headerNav'>
          <img src={cartImg} onClick={props.onClickCart} className='headerCartImg' alt="Cart"/>
          <img src={favoriteImg} className='headerFavoriteImg' alt='Favorites'/>
          <img src={userImg} className='headerUserImg' alt='User'/>
          </div>
          <button className='profile-btn'>Войти</button>
        </header>
    )
}


export default Header;