import { IoIosArrowForward } from "react-icons/io";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";

interface Props {
  price: number;
  rating: number;
  count: number;
  title: string;
  category: string;
}

const ProductDetailImageDescription = ({
  price,
  rating,
  count,
  title,
  category,
}: Props) => {
  return (
    <div className="px-32  max-sm:px-20 max-md:px-10 max-lg:px-10 max-xl:px-10">
      <h3 className="font-semibold text-[#B12704] text-lg mt-2">
        <span className="font-mono">$</span>
        {price}
      </h3>
      <div className="flex justify-center ">
        <p className="font-figtree font-semibold flex justify-center ">
          {rating}
        </p>
        <div className="flex text-[#ee9c4a] mt-1 mx-2 mr-3">
          <BiSolidStar /> <BiSolidStar /> <BiSolidStar /> <BiSolidStarHalf />
        </div>
        <p className="text-[#007185] font-figtree font-semibold">
          {count} ratings
        </p>
      </div>
      <h2 className="font-figtree font-semibold text-left py-1">{title}</h2>
      <div className="flex py-1">
        <IoIosArrowForward size={17} className="mt-1" />
        <p className="font-figtree font-semibold">{category}</p>
      </div>
    </div>
  );
};

export default ProductDetailImageDescription;
