import Card from '../components/Card.js';
function Home({items, searchValue, setSearchValue, onAddToCart, onAddToFavorite, onChangeSearchInput, cartItems}) {
    return (
        <div className='content'>
        <div className='content-box'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h1>
          <div className='searchBlock'>
            <img src="/search.png" alt='Search'/>
            <input onChange={onChangeSearchInput} value={searchValue} type='text' placeholder='Поиск...'/>
            {searchValue && <button onClick={() => setSearchValue('')} className='deleteValue'>✖</button>}
          </div>
        </div>
        <div className='items'>
        {items.filter((item) => (item.title || '').toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
          <Card key={index} onPlus={(obj) => onAddToCart(obj)} onFavorite={(obj) => onAddToFavorite(obj)} isAdded={cartItems.some(obj => Number(obj.id) === Number(item.id))} {...item}/>
      ))}
        </div>
      </div>
    )
}

export default Home;