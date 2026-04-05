import { useSelector } from 'react-redux'
import Card from '../Card'
import ListaDeContas from '../ListaDeContas'
import * as S from './styles'
import { RootReducer } from '../../store'
import { useState } from 'react'
import FormularioSaldo from '../FormularioSaldo'
import FormularioConta from '../FormularioConta'
import Button from '../Button'

const Dashboard = () => {
  const { itens } = useSelector((state: RootReducer) => state.lancamentos)
  const [isVisible, setIsVisible] = useState(false)
  const [tipo, setTipo] = useState('saldo')

  const getResumo = () => {
    let entrada = 0
    let saida = 0

    itens.forEach((item) => {
      if (item.tipo === 'entrada') {
        entrada += item.valor
      } else {
        saida += item.valor
      }
    })

    return {
      entrada,
      saida,
      saldo: entrada - saida
    }
  }

  const { entrada, saida, saldo } = getResumo()

  const closeModal = () => {
    setIsVisible(false)
  }

  return (
    <S.Container>
      <S.Header>
        <h1>Dashboard</h1>
        <div>
          <img src="https://i.pravatar.cc/40" alt="Foto do usuário" />
          <span>Username</span>
        </div>
      </S.Header>
      <main>
        <Button onClick={() => setIsVisible(true)}>Adicionar lançamento</Button>
        <S.CardList>
          <ul>
            <li>
              <Card title="Saldo em conta" value={entrada} color="#E6F0FF" />
            </li>
            <li>
              <Card title="Contas do mês" value={saida} color="#FFE6E6" />
            </li>
            <li>
              <Card title="Investimentos" value={0} color="#F6EFE3" />
            </li>
            <li>
              <Card title="Saldo final" value={saldo} color="#E6F6E3" />
            </li>
          </ul>
        </S.CardList>
      </main>
      <S.Modal className={isVisible ? 'is-visible' : ''}>
        <S.ModalContent>
          <header>
            <h4>Adicionar lançamento</h4>
            <S.CloseIcon onClick={closeModal} />
          </header>
          <S.ButtonContainer>
            <Button
              variant="secondary"
              ativo={tipo === 'saldo'}
              onClick={() => setTipo('saldo')}
              tipo="saldo"
            >
              Saldo
            </Button>
            <Button
              variant="secondary"
              ativo={tipo === 'conta'}
              onClick={() => setTipo('conta')}
              tipo="conta"
            >
              Conta
            </Button>
          </S.ButtonContainer>
          {tipo === 'saldo' ? (
            <FormularioSaldo onClose={closeModal} />
          ) : (
            <FormularioConta onClose={closeModal} />
          )}
        </S.ModalContent>
      </S.Modal>
      <ListaDeContas />
    </S.Container>
  )
}

export default Dashboard
