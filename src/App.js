import "./App.css";
import { Provider } from "react-redux";
import ProductDetail from "./components/ProductDetail";
import ProductList from './components/ProductList'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import { store } from "./Redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { productListAction } from "./Redux/actions/actionProduct";
import { storeProducts } from "./data";
import NavBar from "./components/NavBar";
function App() {

  
  return (
    <Provider store={store}>
 <BrowserRouter>
       <NavBar/>

    <Routes>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/details" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    
    </BrowserRouter>


    </Provider>
   

  

      

  );
}
export default App;
