import { useState } from "react";


export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  const [initialValue, setInitialValue] = useState(JSON.parse(localStorage.getItem(key)|| JSON.stringify(defaultValue)))
  const update = (value:unknown )=>{
    localStorage.setItem(key, JSON.stringify(value))
    setInitialValue(value)
    return value;
  }

  return {
    initialValue,
    update
  }
}

