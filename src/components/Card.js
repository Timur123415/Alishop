import React from 'react';
function Card({img, title, price, onPlus}) {
    const [added, setAdded] = React.useState(false);
    const [favorited, setFavorited] = React.useState(false);
    const clickFavorite = () => {
        setFavorited(true);
    }
    const clickAdd = () => {
      onPlus({img, title, price});
      setAdded(true);
    }
    return (
       <div className="card">
        <img style={{width: '200px', height: '200px'}} src={img} alt='Favorites'/>
        <div><h4>{title}</h4>
        <p>Цена: <span>{price}</span>руб</p>
        </div>
        <div className='btns'>
        <img style={{cursor: 'pointer'}} onClick={clickFavorite} src={favorited ? 'favorite.png' : 'favorites.png'} alt='Favorite'/>
        {!added ? <button onClick={clickAdd} className='btn-add'>Добавить в корзину</button> : <button className='btn-add'>Добавлено</button>}
       </div>
       </div>
    )
}

export default Card;