import './style/light.scss';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import ProductList from './pages/productList/ProductList';
import NewUser from './pages/newUser/NewUser';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { LightModeContext } from './context/lightModeContext';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const { lightMode } = useContext(LightModeContext);

  return (
    <div className={lightMode ? 'app light' : 'app'}>
      {user ? <Navbar /> : ''}
      <div className="container">
        {user ? <Sidebar /> : ''}
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
