const ProductDetailImage: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="w-64 max-sm:w-60 max-md:w-52 max-lg:w-56 max-xl:w-60">
      <img src={image} />
    </div>
  );
};

export default ProductDetailImage;
