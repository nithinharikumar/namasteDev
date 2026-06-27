import { configureStore } from "@reduxjs/toolkit"
import CartReducer from './Slices/cartSlice'

const appStore = configureStore({
    reducer: {
        cart: CartReducer

    }
})
export default appStore