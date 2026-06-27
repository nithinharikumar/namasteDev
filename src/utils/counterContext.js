import { createContext } from "react"

const CounterContext = createContext(
    {
        initialvalue: 0,
    }
)
export default CounterContext