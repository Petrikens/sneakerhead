import "./App.css";
import { Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import NewPage from './pages/NewPage';
import SalePage from './pages/SalePage';
import ForMenPage from './pages/ForMenPage';
import ForWomenPage from './pages/ForWomenPage';
import ShoppingCart from './pages/ShoppingCart';
import ProductCardPage from "./pages/ProductCardPage";
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import ClientPage from './pages/ClientPage';
import PurchasePage from './pages/PurchasePage';

import Layout from './components/Layout';
import RequireAuth from './hoc/RequireAuth'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='new' element={<NewPage />} />
          <Route path='new/:name' element={<ProductCardPage />} />
          <Route path='sale' element={<SalePage />} />
          <Route path='sale/:name' element={<ProductCardPage />} />
          <Route path='male' element={<ForMenPage />} />
          <Route path='male/:name' element={<ProductCardPage />} />
          <Route path='female' element={<ForWomenPage />} />
          <Route path='female/:name' element={<ProductCardPage />} />
          <Route path='cart' element={
            <RequireAuth>
              <ShoppingCart />
            </RequireAuth>} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path="client" element={
            <RequireAuth>
              <ClientPage />
            </RequireAuth>
          } />
          <Route path="purchase" element={<PurchasePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
