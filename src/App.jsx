import { ToastContainer } from 'react-toastify';
import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ProductContainer from './components/ProductContainer';
import { useState } from 'react';
import Steps from './components/Steps';
import PricingSection from './components/PricingSection';
import ExtraSection from './components/ExtraSection';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <ToastContainer />
      <NavBar cartItems={cartItems} />
      <Banner />
      <Stats />
      <ProductContainer cartItems={cartItems} setCartItems={setCartItems} />
      <Steps/>
      <PricingSection/>
      <ExtraSection/>


    </>
  )
}

export default App
