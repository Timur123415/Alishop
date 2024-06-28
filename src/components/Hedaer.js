import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <header>
          <div>
          <Link style={{textDecoration: 'none', color: 'black'}} to="/"><h1 className="headerTitle">Alishop</h1></Link>
          <p className="headerText">Магазин китайских товаров для бизнеса</p>
          </div>
          <div className='headerNav'>
          <img src="/cart.png" onClick={props.onClickCart} className='headerCartImg' alt="Cart"/>
          <Link to="/favorites"><img src="/favorite.png" className='headerFavoriteImg' alt='Favorites'/></Link>
          <img src="/user.png" className='headerUserImg' alt='User'/>
          </div>
          <button className='profile-btn'>Войти</button>
        </header>
    )
}


export default Header;