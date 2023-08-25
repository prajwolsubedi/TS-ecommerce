import { useParams } from "react-router-dom";
import Navbar from "../organism/Navbar";
import Footer from "../organism/Footer";
import ShimmerUI from "../organism/ShimmerUI";
import { useEffect, useState } from "react";
import { FAKESTOREAPI } from "../../assets/constants";
import "../../css/custom.css";
import ProductDetailImage from "../organism/details/ProductDetailImage";
import ProductDetailImageDescription from "../organism/details/ProductDetailImageDescription";
import ProductDescription from "../organism/details/ProductDescription";
import AddBuyCount from "../organism/AddBuyCount";
import { ProductItem } from "../../models/model";
const ProductDetail = () => {
  const [productItem, setProductItem] = useState<ProductItem | null>(null);
  const { id } = useParams();
  useEffect(() => {
    getProductItem();
    window.scrollTo(0, 0);
  }, []);

  async function getProductItem() {
    const data = await fetch(FAKESTOREAPI + "products/" + id);
    const json = await data.json();
    setProductItem(json);
  }

  return !productItem || productItem === null ? (
    <ShimmerUI />
  ) : (
    <>
      <Navbar />
      <div className="flex max-sm:flex-col max-sm:items-center max-sm:text-sm max-md:text-sm">
        <div className="w-5/12 ml-24 my-24 flex flex-col text-center items-center max-sm:w-9/12 max-sm:my-10 max-sm:mx-0  max-md:mx-10 max-lg:mx-10 max-xl:mx-10 ">
          <ProductDetailImage image={productItem?.image} />
          <ProductDetailImageDescription
            price={productItem?.price}
            rating={productItem?.rating?.rate}
            count={productItem?.rating?.count}
            title={productItem?.title}
            category={productItem?.category}
          />
        </div>

        <div className="my-24 w-5/12 flex flex-col  max-sm:w-9/12 max-sm:my-0 ">
          <ProductDescription description={productItem.description} />
          <AddBuyCount productItem={productItem} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
