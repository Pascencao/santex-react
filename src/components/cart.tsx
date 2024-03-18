import { useContext, useEffect, useState } from "react";
import { Currency } from "./currency";
import { CartContext } from "../App";
import { IProductItem } from "../models/products";
import { ShoppingBasket } from "@material-ui/icons";
import { ShoppinCart } from "./card/styles";

export const CartComp = () => {
    const { cart } = useContext(CartContext);

    const calcPrice = (arr:IProductItem[]) => {
        let total = 0;
        arr.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <ShoppinCart>
            <ShoppingBasket />
            {cart.length > 0 ? <Currency value={calcPrice(cart)} /> : "$ 0.00"}
        </ShoppinCart>
    );
};
