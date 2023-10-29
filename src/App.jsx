import React, { useContext } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import HomeTop from './components/HomeTop/HomeTop';
import Brand from './components/Brand/Brand';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import AutomaticAfk from './components/AutomaticAfk/AutomaticAfk';
import FormContact from './components/FormContact/FormContact';
import DetailProduct from './components/DetailProduct/DetailProduct';
import CarritoContext, { CarritoProvider } from './components/Context/CartContext';
import CartDetails from './components/CartDetails/CartDetails';





const Home = () => {
  return (
    <>
      <HomeTop className="hometop" />
      <ItemListContainer />
      <Footer/>
      <AutomaticAfk/>
    </>
  );
}

function App() {
  const { carrito, total, cantidadTotal } = useContext(CarritoContext);
  
  return (
    <BrowserRouter>
      <CarritoProvider>
        <div className="app-container">
          <SideBar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/formcontact" element={<FormContact />} />
              <Route path="/producto/:id" element={<DetailProduct />} />
              <Route path="/cart" element={<CartDetails />} />
            </Routes>
          </div>
        </div>
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App;
