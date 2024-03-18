import { ChevronLeft, ChevronRight, FirstPage, LastPage } from "@material-ui/icons";
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { PaginatorWrapper } from "./card/styles";

interface IPaginatorProps {
    totalItems: number;
    itemsPerPage: number;
    current: number;
    onChange: Function
}
export const Paginator = ({totalItems, itemsPerPage, current, onChange}:IPaginatorProps)=>{
    const [pagesButtons, setPagesButtons] = useState<number[]>([])
    useEffect(()=>{
        let pages = Math.ceil(totalItems / itemsPerPage);
        let buttons = []
        for(let i = 1; i <= pages; i++){
            buttons.push(i)
        }
        setPagesButtons(buttons);
    },[totalItems,itemsPerPage])
    const setPage = (num: number)=> onChange(num)
    return <PaginatorWrapper>
        <IconButton onClick={()=>setPage(1)} size="large" color="primary">
            <FirstPage />
        </IconButton>
        <IconButton  onClick={()=>setPage(current-1)}size="large" color="primary">
            <ChevronLeft />
        </IconButton>
        {pagesButtons.map((val: number)=><Button color={val === current ? 'secondary' : 'primary'} onClick={()=>setPage(val)}>{val}</Button>)}
        <IconButton onClick={()=>setPage(current+1)} size="large" color="primary">
            <ChevronRight />
        </IconButton>
        <IconButton  onClick={()=>setPage(pagesButtons[-1])} size="large" color="primary">
            <LastPage />
        </IconButton>
    </PaginatorWrapper>
}