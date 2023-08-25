import { useEffect, useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { Price } from "../../../assets/constants";
import { onPriceChange } from "../../../assets/productSlice";
import { onFilter } from "../../../assets/productSlice";
import { useAppDispatch, useAppSelector } from "../../../assets/store";
import { ProductItem } from "../../../models/model";

const PriceDropdown: React.FC<{ filterProducts: () => ProductItem[] }> = ({
  filterProducts,
}) => {
  const dispatch = useAppDispatch();
  const currPrice = useAppSelector((state) => state.product.price);
  //   const filteredArray = arr1.filter((item1) => {
  //     const matchingObj = arr2.find((item2) => item1.id === item2.id);
  //     return matchingObj !== undefined;
  //   });
  //   return filteredArray;
  // };

  // const priceFilter = (lowerLimit, UpperLimit) => {
  //   return allProducts.filter(
  //     (item) => item.price >= lowerLimit && item.price <= UpperLimit
  //   );
  // };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<null | string>(null);

  const handlePriceClick = (price: string, index: number): void => {
    dispatch(onPriceChange(index));
    setSelectedPrice(price);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const filteredProductsArray = filterProducts();
    dispatch(onFilter(filteredProductsArray));
  }, [currPrice]);
  return (
    <div className="w-2/5 text-[#fff] flex flex-col items-center rounded-lg relative max-md:w-3/6 max-md:ml-2">
      <button
        className="bg-white text-black w-full py-1 px-2 flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-[#232f3e] duration-300 active:text-yellow-900"
        onClick={(e) => {
          setIsOpen((prev) => !prev);
          e.preventDefault();
        }}
      >
        {!selectedPrice ? "None" : selectedPrice}
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-16 flex flex-col justify-center  rounded-lg py-2 w-full text-black">
          {Price.map((price, index) => (
            <h3
              key={index}
              className="w-full  font-figtree pl-4 hover:bg-[#3a7bc085] cursor-pointer rounded"
              onClick={() => handlePriceClick(price, index)}
            >
              {price}
            </h3>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceDropdown;
