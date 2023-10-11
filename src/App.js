import { Route, Routes, createSearchParams, useNavigate } from "react-router-dom";
import Products from "./Pages/Shop/Products";
import SingleProduct from "./Pages/Shop/SingleProduct";
import Navbar from "./Components/NavBar/Navbar";
import Cart from "./Pages/Cart/Cart";
import ShopContext from "./Context/ShopContext";

function App() {
  
  const Navigate = useNavigate()
  const SearchButtonHandler = (InputValue)=>{
    Navigate(`/?${createSearchParams({q:InputValue})}`)
  }
  return (
    <ShopContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products SearchButtonHandler={SearchButtonHandler} />} />
        <Route path="/product/:ProductId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* <Footer /> */}
    </ShopContext>
  );
}

export default App;
