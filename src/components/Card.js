import React from 'react';
function Card({id, img, title, price, onPlus, onFavorite, favorited = false, isAdded = false}) {
    const [added, setAdded] = React.useState(isAdded);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const clickFavorite = () => {
        onFavorite({id, img, title, price});
        setIsFavorite(!isFavorite);
    }
    const clickAdd = () => {
      onPlus({id, img, title, price});
      setAdded(!added);
    }
    return (
       <div className="card">
        <img style={{width: '200px', height: '200px'}} src={img} alt='Favorites'/>
        <div><h4>{title}</h4>
        <p>Цена: <span>{price}</span>руб</p>
        </div>
        <div className='btns'>
        <img style={{cursor: 'pointer'}} onClick={clickFavorite} src={isFavorite ? 'favorite.png' : 'favorites.png'} alt='Favorite'/>
        {!added ? <button onClick={clickAdd} className='btn-add'>Добавить в корзину</button> : <button className='btn-add'>Добавлено</button>}
       </div>
       </div>
    )
} 

export default Card;