interface Props {
  image: string;
}

const ProductImage = ({ image }: Props) => {
  return (
    <div>
      <img
        className="ml w-72 h-80 mb-5 object-scale-down max-md:w-48 max-md:h-52 max-lg:h-56 max-xl:w-56 max-xl:h-52  max-lg:w-56  max-md:my-4 max-sm:w-36 max-sm:h-36"
        src={image}
      />
    </div>
  );
};

export default ProductImage;
