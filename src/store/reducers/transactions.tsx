import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Category } from '../../utils/enums/Category'

export type Transaction = {
  id: number
  description: string
  amount: number
  type: 'income' | 'expense'
  category: Category
  date: string
}

type TransactionState = {
  items: Transaction[]
}

const initialState: TransactionState = {
  items: []
}

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Transaction>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, remove } = transactionsSlice.actions
export default transactionsSlice.reducer
