import "./App.css";
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage';
import NewPage from './components/NewPage';
import SalePage from './components/SalePage';
import ForMenPage from './components/ForMenPage';
import ForWomenPage from './components/ForWomenPage';
import ShoppingCart from './components/ShoppingCart';
import Layout from './components/Layout';
import ProductCardPage from "./components/ProductCardPage";
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import ClientPage from './components/ClientPage';
import PurchasePage from './components/PurchasePage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/:id' element={<ProductCardPage />} />
          <Route path='new' element={<NewPage />} />
          <Route path='sale' element={<SalePage />} />
          <Route path='men' element={<ForMenPage />} />
          <Route path='women' element={<ForWomenPage />} />
          <Route path='cart' element={<ShoppingCart />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="purchase" element={<PurchasePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
