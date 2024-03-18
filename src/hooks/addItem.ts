import { useMutation } from "@apollo/client";
import { ADD_ITEM_TO_ORDER } from "../graphql/queries";

// Here we put mutations. Remove next line
export const useAddItem = () => {
    const [
        addItem,
        { loading, data }
      ] = useMutation(ADD_ITEM_TO_ORDER)
    return {
        loading,
        data,
        addItem
    }
};
