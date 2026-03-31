import { ToastContainer } from 'react-toastify';
import './App.css';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Stats from './components/Stats';
import ProductContainer from './components/ProductContainer';

function App() {

  return (
    <>
      <ToastContainer />
      <NavBar />
      <Banner/>
      <Stats/>
      <ProductContainer/>


    </>
  )
}

export default App
