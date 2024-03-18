import { Dispatch, createContext, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import useStateWithStorage from './hooks/useStateWithStorage';
import { IProductItem } from './models/products';
export const CartContext = createContext({cart: [], setCartItem: ()=>{}} as {cart:IProductItem[]; setCartItem: Dispatch<any>})

function App() {
  const {initialValue, update}:any = useStateWithStorage( 'cart', [])
  const [cart, setCart] = useState(initialValue)
  
  useEffect(()=>{
    setCart(cart)
  },[cart])
  const setCartItem = (value: IProductItem[])=>{  
    update(value);
    setCart(value)
  }
  return (
    <CartContext.Provider value={{cart, setCartItem}}> 
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </CartContext.Provider>
  );
}

export default App;
