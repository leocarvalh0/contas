import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Lancamento = {
  id: number
  descricao: string
  valor: number
  tipo: 'entrada' | 'saida'
  data: string
  categoria: string
}

type LancamentoState = {
  itens: Lancamento[]
}

const initialState: LancamentoState = {
  itens: []
}

const lancamentosSlice = createSlice({
  name: 'lancamentos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Lancamento>) => {
      state.itens.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})

export const { adicionar, remover } = lancamentosSlice.actions
export default lancamentosSlice.reducer
