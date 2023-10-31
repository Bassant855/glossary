import React from "react";
import { useCartContext } from "../context/CartContext";
interface propsType {
    size: string;
}
const CartCount: React.FC<propsType> = ({size}) => {
  const {product} = useCartContext()
  return (
    <div className={`absolute bg-red-600 text-[14px] ${size} -right-3 -top-2 rounded-full
    grid place-items-center`}>
        {product.length}
    </div>
  )
}

export default CartCount