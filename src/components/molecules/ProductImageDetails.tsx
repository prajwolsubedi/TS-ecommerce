import { IoIosArrowForward } from "react-icons/io";
import { FcRating } from "react-icons/fc";

interface Props {
  title: string;
  category: string;
  ratings: number;
  price: number;
}

const ProductImageDetails = ({ title, category, ratings, price }: Props) => {
  return (
    <div className="pl-4 max-sm:text-sm">
      <p className="font-comic  text-[#007185] font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </p>
      <div className="flex ">
        <IoIosArrowForward size={12} className="mt-2 text-[#007185]" />
        <p className="text-[#007185] font-comic">{category}</p>
      </div>
      <div className="flex ">
        <p className="">{ratings}</p>
        <FcRating className="mt-1 mx-1" />
      </div>
      <div className="flex">
        <p className="text-xs text-[#0F1111] pt-1"> $ </p>
        <p className="text-[#0F1111] text-base font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default ProductImageDetails;
