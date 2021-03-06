import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import ScrollToTop from './utils/ScrollToTop';

export interface BasketInterface {
  name: string, 
  price: string,
  image: string,
  quantity: number,
  id: string
}

export interface BasketContextInterface {
  basket: BasketInterface[],
  setBasket: React.Dispatch<React.SetStateAction<BasketInterface[]>>
}

export const BasketContext = createContext<BasketContextInterface>({
  basket: [],
  setBasket: () => {}
})


ReactDOM.render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
