import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../context';
function Card({id, img, title, price, onPlus, onFavorite, favorited = false, loading = false}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);


    const clickFavorite = () => {
        onFavorite({id, img, title, price});
        setIsFavorite(!isFavorite);
    }
    const clickAdd = () => {
      onPlus({id, img, title, price});
     } 
     
    return (
      <div className="card">
      {loading ? <ContentLoader 
        speed={2}
        width={250}
        height={400}
        viewBox="0 0 250 400"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
      >
        <rect x="25" y="30" rx="0" ry="0" width="200" height="200" /> 
        <rect x="25" y="250" rx="21" ry="21" width="192" height="20" /> 
        <rect x="66" y="350" rx="20" ry="12" width="181" height="36" /> 
        <rect x="0" y="350" rx="10" ry="10" width="45" height="42" /> 
        <rect x="25" y="289" rx="20" ry="20" width="171" height="23" />
      </ContentLoader> : <><img style={{width: '200px', height: '200px'}} src={img} alt='Favorites'/>
      <div>
      <h4>{title}</h4>
      <p>Цена: <span>{price}</span>руб</p>
      </div>
      <div className='btns'>
      <img style={{cursor: 'pointer'}} onClick={clickFavorite} src={isFavorite ? 'favorite.png' : 'favorites.png'} alt='Favorite'/>
      {isItemAdded(id) ? <button onClick={clickAdd} className='btn-add'>Добавлено</button> : <button onClick={clickAdd} className='btn-add'>Добавить в корзину</button>}
     </div></>}
      
        
       
       </div>
    )
} 

export default Card;