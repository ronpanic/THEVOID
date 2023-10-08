import './App.css'
import SideBar from './components/SideBar/SideBar';
import HomeTop from './components/HomeTop/HomeTop';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <SideBar className="sidebar"/>
      <div className="content-container">
        <HomeTop className="hometop" />
        <div className='product-container'>
          <ItemListContainer/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
