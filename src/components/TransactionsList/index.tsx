import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/transactions'

import * as S from './styles'

const TransactionsList = () => {
  const { items } = useSelector((state: RootReducer) => state.transactions)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const expenses = items.filter((item) => item.type === 'expense')

  return (
    <>
      <div>
        <S.TitleContainer>
          <h3>Minhas contas</h3>
        </S.TitleContainer>
        <S.ListContainer>
          <header>
            <span>Conta</span>
            <span>Valor</span>
            <span>Vencimento</span>
            <span>Categoria</span>
          </header>
          {expenses.map((item) => (
            <S.Infos key={item.id}>
              <span>{item.description}</span>
              <span>R$ {item.amount}</span>
              <span>{item.date}</span>
              <span>Casa</span>
              <S.DeleteIcon onClick={() => removeItem(item.id)} />
            </S.Infos>
          ))}
        </S.ListContainer>
      </div>
    </>
  )
}

export default TransactionsList
