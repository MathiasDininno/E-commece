// https://magic.reactjs.net/htmltojsx.htm <-- PARA TRAFORMAR DE HTML A JSX
// https://github.com/franciscopugh/44995-react-2023 repo
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import { DarkModeProvider } from './context/DarkModeContext';
import { CarritoProvider } from './context/CarritoContext';

// Firebase
import { updateProducto } from '../utils/firebase';

//Toastify
import { ToastContainer } from 'react-toastify';

import { Navbar } from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';
import { Footer } from './Footer/Footer';

export const App = () => {
  updateProducto()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar />
            <ToastContainer />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:idCategoria' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </CarritoProvider>
          <Footer />
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
} 