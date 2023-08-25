
interface Props{
  onAdd : () => void;
  onRemove: () => void;
  orderCount: number;
}

const ProductQuantity = ({ onAdd, onRemove, orderCount }:Props) => {
  return (
    <div className=" flex flex-col  pl-3 py-2">
      <h2 className="font-figtree font-semibold py-3 custom-border-bottom mb-4">
        Quanity:
      </h2>
      <div className="flex custom-border justify-around w-3/12 rounded-full max-md:w-5/12 max-lg:w-5/12">
        <button type="button" className=" text-2xl font-mono" onClick={onAdd}>
          -
        </button>
        <p className="text-xl pt-0.5 font-light ">{orderCount}</p>
        <button type="button" className="text-2xl font-mono" onClick={onRemove}>
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
