import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import { Provider } from "react-redux";
import store from "./assets/store";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetail from "./components/templates/ProductDetail";
// import { Protected } from "./hooks/useRouteProtection";
const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        {/* <Route path="/profile" element={<Home />}></Route> */}
        <Route path="/products/:id" element={<ProductDetail />}></Route>
      </Routes>
    </Provider>
  );
};

export default App;

// {<Protected children={<Cart />}></Protected>}
