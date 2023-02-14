// https://magic.reactjs.net/htmltojsx.htm <-- PARA TRAFORMAR DE HTML A JSX
// https://github.com/franciscopugh/44995-react-2023 repo
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          {/* <Route path='/C/:id' element={<Checkout />}/> */}
        </Routes>
        <Checkout/>
      </BrowserRouter>
    </>
  );
} 