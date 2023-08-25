import { useEffect } from "react";
import ProductCards from "../components/templates/ProductCards";
import { FAKESTOREAPI } from "../assets/constants";
import SearchProduct from "../components/organism/FilterProducts/SearchProduct";
import { useDispatch } from "react-redux";
import { initializeProducts } from "../assets/productSlice";
import Navbar from "../components/organism/Navbar";
import Footer from "../components/organism/Footer";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, []);

  async function getProduct() {
    const data = await fetch(FAKESTOREAPI + "products");
    const json = await data.json();
    dispatch(initializeProducts(json));
  }
  return (
    <div>
      <Navbar />
      <SearchProduct />
      <ProductCards />
      <Footer />
    </div>
  );
};

export default Home;
