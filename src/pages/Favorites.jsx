import Card from "../components/Card";
function Favorites({items, onAddToFavorite}) {
    return (
        <div className='content'>
        <div className='content-box'>
          <h1>Мои закладки</h1>
         
        </div>
        <div className='items'>
        {items
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