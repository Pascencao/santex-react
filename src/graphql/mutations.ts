import { useLazyQuery, useQuery } from "@apollo/client";
import { ADD_ITEM_TO_ORDER, GET_ORDER } from "./queries";

// Here we put mutations. Remove next line
export const useGetCart = () => {
    const [
        getCart, 
        { loading, data }
      ] = useLazyQuery(GET_ORDER)
    return {
        loading,
        data,
        getCart
    }
};

/* 
"""
Adds an item to the order. If custom fields are defined on the OrderLine entity, a third argument 'customFields' will be available.
"""
type Mutation{
addItemToOrder(productVariantId: ID!, quantity: Int!): UpdateOrderItemsResult!
}
*/