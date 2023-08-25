import React from "react";
import ProductQuantity from "./details/ProductQuantity";
import PurchaseButtons from "../molecules/PurchaseButtons";
import { addItem } from "../../assets/cartSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CartItem } from "../../models/model";

const AddBuyCount: React.FC<{ productItem: CartItem }> = ({ productItem }) => {
  const dispatch = useDispatch();
  const addProductItem = ({
    productItem,
    orderCount,
  }: {
    productItem: CartItem;
    orderCount: number;
  }) => {
    dispatch(addItem({ productItem, orderCount }));
  };
  const [orderCount, setorderCount] = useState(1);

  return (
    <>
      <ProductQuantity
        orderCount={orderCount}
        onAdd={() => {
          setorderCount((prev) => (prev !== 1 ? prev - 1 : prev));
        }}
        onRemove={() => {
          setorderCount((prev) => (prev !== 5 ? prev + 1 : prev));
        }}
      />
      <PurchaseButtons
        onClick={() => addProductItem({ productItem, orderCount })}
      />
    </>
  );
};

export default AddBuyCount;
