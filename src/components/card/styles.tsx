import styled from "styled-components";


export const GridWrapper = styled.div`
    width: 960px;
    margin: 15px auto
`

export const PaginatorWrapper = styled.div`
    display: block;
    margin: 15px auto;
    width: 60%;
`
export const MainNav = styled.header`
    background: #ddd;
    > div{
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    img{
        height: 20px;
        margin: 15px;
    }
`
export const ShoppinCart = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    > svg {
        color: #3ba93d;
        margin-right: 10px;
    }
`