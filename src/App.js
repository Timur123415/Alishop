import React  from 'react';
import Header from './components/Hedaer.js';
import Cart from './components/Cart.js';
import Card from './components/Card.js';

function App(props) {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
React.useEffect(() => {
  fetch('https://654a3a31e182221f8d52c450.mockapi.io/items').then(res => {
    return res.json();
  }).then(json => {
    setItems(json)
  });
}, []);


  // const arr = [
  //   {name: "Сумка Fashion", price: 1700, img: "/img/bag.webp"},
  //   {name: "Кроссовки кожаные", price: 2738, img: "/img/shoes.webp"},
  //   {name: "Кабель USB зарядка", price: 451, img: "/img/usb.webp"},
  //   {name: "Наушники Baseus", price: 4387, img: "/img/ears.webp"},
  //   {name: "Смарт-часы MASX Oasis X", price: 1405, img: "/img/watch.webp"},
  //   {name: "Солнцезащитные очки", price: 1230, img: "/img/glasses.webp"},
  //   {name: "Проектор DITONG 4K", price: 13388, img: "/img/proector.webp"},
  //   {name: "Сувенир кошка", price: 300, img: "/img/cat.webp"}
  // ]


  const [cartOpened, setCartOpened] = React.useState(false);


  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }
 
 return (
  <div className='wrapper'>
    <Header onClickCart={() => setCartOpened(true)} />
    {cartOpened ? <Cart items={cartItems} onCloseCart={() => setCartOpened(false)}/> : null}
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
        {items.filter((item) => item.title.includes(searchValue)).map((item, index) => (
          <Card key={index} title={item.name} price={item.price} img={item.img} onPlus={(obj) => onAddToCart(obj)}/>
        ))}
        </div>
      </div>
       
  </div>
 )
}

export default App;
