interface Props {
  description: string;
}

const ProductDescription = ({ description }: Props) => {
  return (
    <div className="text-left py-10 pl-3 max-sm:py-0 max-md:py-0 max-lg:py-0 max-xl:py-5">
      <h2 className="font-figtree font-semibold custom-border-bottom py-2">
        Product Description
      </h2>
      <p className="font-comic font-semibold pt-2">{description}</p>
    </div>
  );
};

export default ProductDescription;
