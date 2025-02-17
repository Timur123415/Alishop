import React from "react";
import Card from "../components/Card";
import AppContext from "../context";
function Favorites() {
  const {favorites, onAddToFavorite} = React.useContext(AppContext);
    return (
        <div className='content'>
        <div className='content-box'>
          <h1>Мои закладки</h1>
         
        </div>
        <div className='items'>
        {favorites
        .map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorite}
          {...item}
          />
      ))}
        </div>
      </div>
    )
}

export default Favorites;