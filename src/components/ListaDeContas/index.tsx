import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { remover } from '../../store/reducers/lancamentos'

const ListaDeContas = () => {
  const { itens } = useSelector((state: RootReducer) => state.lancamentos)
  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remover(id))
  }

  const contas = itens.filter((item) => item.tipo === 'saida')

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
          {contas.map((item) => (
            <S.Infos key={item.id}>
              <span>{item.descricao}</span>
              <span>R$ {item.valor}</span>
              <span>{item.data}</span>
              <span>Casa</span>
              <S.DeleteIcon onClick={() => removeItem(item.id)} />
            </S.Infos>
          ))}
        </S.ListContainer>
      </div>
    </>
  )
}

export default ListaDeContas
