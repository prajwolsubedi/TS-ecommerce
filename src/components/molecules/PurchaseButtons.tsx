import AddToCart from "../atoms/buttons/AddToCart";
import BuyNow from "../atoms/buttons/BuyNow";

interface Props {
  onClick: () => void;
}

const PurchaseButtons = ({ onClick }: Props) => {
  return (
    <div className="flex py-10 pl-3 text-white max-md:pl-0 max-md:py-10 max-lg:pl-0 ">
      <AddToCart onClick={onClick} />
      <BuyNow />
    </div>
  );
};

export default PurchaseButtons;
