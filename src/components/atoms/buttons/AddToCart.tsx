import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props{
  onClick: () => void;
}

const AddToCart = ({onClick}:Props) => {
  return (
    <button onClick={onClick}
      type="button"
      className="  bg-[#613E98] hover:bg-[#43A69B] p-2 w-5/12 rounded-full mr-5 max-md:w-6/12 max-md:px-0 max-lg:px-0 max-lg:w-6/12 "
    >
      <span className="flex justify-center ">
        <AiOutlineShoppingCart
          size={20}
          className="mt-1 mr-2 max-sm:mt-0 max-md:mt-0"
        />
        Add To Cart
      </span>
    </button>
  );
};

export default AddToCart;
