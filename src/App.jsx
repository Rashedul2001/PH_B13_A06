import { ToastContainer } from 'react-toastify';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductContainer from './components/ProductContainer';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([{
        "id": 1,
        "name": "Canva Pro",
        "description": "Design tool with templates, graphics, and collaboration features.",
        "price": 12.99,
        "period": "monthly",
        "tag": "popular",
        "tagType": "popular",
        "features": [
            "100+ templates",
            "Brand Kit",
            "Export to PDF"
        ],
        "icon": "https://i.ibb.co/Y48NngbJ/canva.jpg"
    }]);

  return (
    <>
      <ToastContainer />
      <NavBar cartItems={cartItems} />
      <Banner />
      <Stats />
      <ProductContainer cartItems={cartItems} setCartItems={setCartItems} />


    </>
  )
}

export default App
