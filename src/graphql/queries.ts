// Here we put queries. Remove next line
import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
query ProductList($start: Int, $limit: Int) {
    products(options: {take: $limit, skip:$start}) {
		items {
            id
            name
            slug
            assets{
                source
            }
            variants{
                id
                name
                price
                sku
           }
        }
        totalItems
    }
  }
`;

export const ADD_ITEM_TO_ORDER = gql`
    mutation($id:ID = 2, $q: Int= 0){
        addItemToOrder(productVariantId:$id, quantity:$q){
            ...on Order{
            id
            state
            totalQuantity
            totalWithTax
            }
            ...on ErrorResult {
            errorCode
            message
            }
            
        }
    }
`
export const GET_ORDER = gql`
    query Order{
        activeOrder{
        type
        state
        active
        lines{
            id
            productVariant{
                name
                price
            }
                quantity
            }
        }
    }
`