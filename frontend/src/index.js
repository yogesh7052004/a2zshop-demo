import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Styles/bootstrap.custom.css';
import './assets/Styles/index.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
     <Route index = {true} path="/" element = {<HomeScreen />} />
     <Route path='/product/:id' element = {<ProductScreen />} />
     <Route path='/cart' element = {<CartScreen />} />
     <Route path='/login' element = {<LoginScreen />} />
     <Route path='/register' element = {<RegisterScreen />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
