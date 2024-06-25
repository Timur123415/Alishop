import React  from 'react';
import Header from './components/Hedaer.js';
import Cart from './components/Cart.js';
import Card from './components/Card.js';
import search from '../src/assets/search.png';

function App() {


  const [cartOpened, setCartOpened] = React.useState(false);
 
 return (
  <div className='wrapper'>
    <Header onClickCart={() => setCartOpened(true)} />
    {cartOpened ? <Cart onCloseCart={() => setCartOpened(false)}/> : null}
      <div className='content'>
        <div className='content-box'>
          <h1>Все товары</h1>
          <div className='searchBlock'>
            <img src={search} alt='Search'/>
            <input type='text' placeholder='Поиск...'/>
          </div>
        </div>
        <div className='items'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
      </div>
       
  </div>
 )
}

export default App;
