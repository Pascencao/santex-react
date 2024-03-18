export interface IVariants {
    name: string; 
    price: number; 
    sku: string;
    id: string;
}
export interface IProduct {
    assets: {source: string}[];
    name: string;
    description: string;
    variants: IVariants[]
  }

  
export interface IProductItem{
    name: string;
    price: number;
    quantity: number;
    variant_id: string;
    variant_name: string;
}