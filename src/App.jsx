import React from 'react';
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
  return (
    <BrowserRouter>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/formcontact" element={<FormContact />} />
            <Route path="/producto/:id" element={<DetailProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
