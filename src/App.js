import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Hedaer.js';
import Cart from './components/Cart.js';
import Home from './pages/Home.jsx';
import Favorites from './pages/Favorites.jsx';
import axios from 'axios';
import AppContext from './context.js';

function App(props) {

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [favorites, setFavorites] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);






React.useEffect(() => {
 async function fetchData() {
  const cartResponse = await axios.get('https://654a3a31e182221f8d52c450.mockapi.io/cart');
  const favoritesResponse = await axios.get('https://654d178677200d6ba859fa04.mockapi.io/favorites');
  const itemsResponse = await axios.get('https://654a3a31e182221f8d52c450.mockapi.io/items');

  setIsLoading(false)
  
  setCartItems(cartResponse.data);
  setFavorites(favoritesResponse.data);
  setItems(itemsResponse.data);

 }

 fetchData();
},[]);


const onRemoveItem = (id) => {
    axios.delete(`https://654a3a31e182221f8d52c450.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
}


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
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://654a3a31e182221f8d52c450.mockapi.io/cart/${obj.id}`)
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    }else{
    axios.post('https://654a3a31e182221f8d52c450.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj]);
      }}

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://654d178677200d6ba859fa04.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await axios.post('https://654d178677200d6ba859fa04.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }
 
 return (
  <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems}}>
    <div className='wrapper'>
    <Header onClickCart={() => setCartOpened(true)} />
    {cartOpened ? <Cart items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      
      <Routes>
        <Route path='/favorites' element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />} exact></Route>
        <Route path='/' element={<Home items={items} cartItems={cartItems} isLoading={isLoading} searchValue={searchValue} setSearchValue={setSearchValue} onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart} onChangeSearchInput={onChangeSearchInput}/>}></Route>
      </Routes>
     
       
  </div>
  </AppContext.Provider>
 )
}

export default App;
