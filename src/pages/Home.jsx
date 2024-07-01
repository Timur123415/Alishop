import React from 'react';
import Card from '../components/Card.js';
function Home({items, searchValue, setSearchValue, onAddToCart, onAddToFavorite, onChangeSearchInput, isLoading}) {
  

  const renderItems = () => {
    
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
     return (isLoading ? [...Array(8)] :   
        filtredItems).map((item, index) => (
          <Card key={index} onPlus={(obj) => onAddToCart(obj)} loading={isLoading} onFavorite={(obj) => onAddToFavorite(obj)}  {...item}/>
      ))
  }
    return (
        <div className='content'>
        <div className='content-box'>
          <h1 className='contentTitle'>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все товары'}</h1>
          <div className='searchBlock'>
            <img src="/search.png" alt='Search'/>
            <input onChange={onChangeSearchInput} value={searchValue} type='text' placeholder='Поиск...'/>
            {searchValue && <button onClick={() => setSearchValue('')} className='deleteValue'>✖</button>}
          </div>
        </div>
        <div className='items'>
        {renderItems()}
        </div>
      </div>
    )
}

export default Home;