export const Currency = ({value}:{value: string|number})=>{
    let result;
    if(typeof value === 'string'){
        result = `$ ${parseFloat(value) / 100}`
    } else {
        result = `$ ${value / 100}`
    }
    return (<>{result}</>)
}