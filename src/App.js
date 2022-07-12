import "./App.css";
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import NewPage from './pages/NewPage';
import SalePage from './pages/SalePage';
import ForMenPage from './pages/ForMenPage';
import ForWomenPage from './pages/ForWomenPage';
import ShoppingCart from './pages/ShoppingCart';
import Layout from './components/Layout';
import ProductCardPage from "./pages/ProductCardPage";
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ClientPage from './pages/ClientPage';
import PurchasePage from './pages/PurchasePage';


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
