import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_COLLECTIONS } from "../graphql/queries";
import { ProductItem } from "./ProductItem";
import { Grid } from "@mui/material";
import { GridWrapper } from "./card/styles";
import { IProduct } from "../models/products";
import { Paginator } from "./paginator";

export function ProductList() {
  const [currentPage, setCurrentPage ] = useState(1);
  const [ limit ] = useState(10)
  const {loading, data} = useQuery(GET_COLLECTIONS,{variables: {start: limit * (currentPage-1), limit: limit}})

  const [productList, setProductList] = useState(data?.products?.items || [])
  const handlePaginationChange = (page: number)=>{
    setCurrentPage(page)
  }
  useEffect(()=>{
    if(!loading){
      setProductList(data?.products?.items || [])
    }
  },[loading,data])
  
  return <GridWrapper>
    <h3>Product List</h3>
    <Grid container spacing={2} >
        {productList?.map((item:IProduct,index:number)=>{
          return (<Grid item xs={4}>
            <ProductItem item={item} index={index} />
          </Grid>)
        })}
    
    </Grid>
    <Paginator totalItems={data?.products?.totalItems} current={currentPage} itemsPerPage={limit} onChange={handlePaginationChange} />
  </GridWrapper>;
}
