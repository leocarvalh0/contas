import { configureStore } from '@reduxjs/toolkit'
import lancamentos from './reducers/lancamentos'

const store = configureStore({
  reducer: {
    lancamentos: lancamentos
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
