import { Link } from "react-router-dom";
import ProductImage from "../atoms/images/ProductImage";
import ProductImageDetail from "../molecules/ProductImageDetails";
import ShimmerUI from "../organism/ShimmerUI";
import { useAppSelector } from "../../assets/store";
const ProductsCard = () => {
  const filteredProducts = useAppSelector(
    (state) => state.product.filteredProducts
  );

  return filteredProducts.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="flex flex-wrap justify-between max-sm:items-center max-md:justify-evenly max-md:px-0 max-lg:px-10  px-20 my-20 max-sm:my-0 max-sm:px-0 max-sm:mx-0">
      {filteredProducts?.map((value) => {
        return (
          <Link to={"/products/" + value.id} key={value.id}>
            <div className="flex flex-col w-72 my-10  max-md:w-48 max-lg:w-60 max-xl:w-60 max-sm:w-40">
              <ProductImage image={value.image} />
              <ProductImageDetail
                title={value.title}
                category={value.category}
                ratings={value.rating.rate}
                price={value.price}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsCard;
