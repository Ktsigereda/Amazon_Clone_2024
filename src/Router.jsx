
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing";
import Signup from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/auth" element={<Signup />} />
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/orders" element={<Orders/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/category/:categoryName" element={<Results />} />
                  <Route path="/products/:productId" element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
  )
};

export default Router