import { configureStore } from '@reduxjs/toolkit'
import transactions from './reducers/transactions'

const store = configureStore({
  reducer: {
    transactions: transactions
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
