import { Button, Card, CardActions, CardContent, CardMedia, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { Dispatch, useContext, useState } from "react";
import { IProduct, IVariants, IProductItem } from "../models/products";
import { Currency } from "./currency";
import { useAddItem } from "../hooks/addItem";
import { CartContext } from "../App";

export const ProductItem = ({item, index}: {item: IProduct, index: number})=>{
    const {cart, setCartItem} = useContext(CartContext)
    const {addItem} = useAddItem()
    const [selectedItem, setSelectedItem] = useState(item.variants[0]);
    const handleChange = (e: SelectChangeEvent)=>{
        const choice = item.variants?.find((v:IVariants)=>v.id === e.target.value );
        setSelectedItem(choice || item.variants[0])
    }
    const addToCart = ()=>{
        addItem({variables:{id: selectedItem.id, q: 1}})
        const toSave = {
            name: item.name,
            price: selectedItem.price,
            quantity: 1,
            variant_id: selectedItem.id,
            variant_name: selectedItem.name
        }

        const exist = cart.findIndex((cartItem:IProductItem) => cartItem.variant_id === toSave.variant_id) > -1;
        if(exist){
            cart.map((cartItem:IProductItem) => {
                if(cartItem.variant_id === toSave.variant_id){
                cartItem.quantity =cartItem.quantity+ toSave.quantity;
                }
                return cartItem
            })
        } else {
            cart.push(toSave)
        }
        setCartItem(cart)
    }
    return (<Card sx={{ maxWidth: 345 }} key={index}>
        <CardMedia
          component="img"
          alt="product image"
          height="140"
          image={item.assets[0].source}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {item.name}
          </Typography>
          <Typography variant="body2">
          {item.description?.substring(0,100)}
          </Typography>
          {item.variants.length > 1 ? 
            <Select onChange={handleChange} size="small" value={selectedItem.id}>
                {item.variants.map((opt:IVariants)=>(
                     <MenuItem key={opt.id} value={opt.id}>{opt.name} <Currency value={opt.price} /></MenuItem>
                ))}
            </Select>
            : 
            <Typography variant="body2">
            {selectedItem?.id} <Currency value={selectedItem?.price} />
            </Typography>
          }
        </CardContent>
        <CardActions>
          <Button size="small" onClick={addToCart}>Buy</Button>
        </CardActions>
      </Card>

    )
}