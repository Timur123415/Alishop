import React from 'react';
import bag from '../assets/img/bag.webp';
import addBtn from '../assets/add.png';
import addedBtn from '../assets/added.png';
import favoriteIcon from '../assets/favorites.png';
import favoritedIcon from '../assets/favorite.png';
function Card() {
    const [added, setAdded] = React.useState(false);
    const [favorited, setFavorited] = React.useState(false);
    const clickFavorite = () => {
        setFavorited(true);
    }
    const clickAdd = () => {
      setAdded(true);
    }
    return (
       <div className="card">
        <img style={{width: '200px', height: '200px'}} src={bag}/>
        <div><h3>Сумка Fashion</h3>
        <p>Цена: <span>12000</span></p>
        </div>
        <div className='btns'>
        <img style={{cursor: 'pointer'}} onClick={clickFavorite} src={favorited ? favoritedIcon : favoriteIcon} alt='Favorite'/>
        <img style={{cursor: 'pointer'}} onClick={clickAdd} src={added ? addedBtn : addBtn}/>
       </div>
       </div>
    )
}

export default Card;