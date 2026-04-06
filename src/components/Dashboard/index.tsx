import { useState } from 'react'
import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'

import Card from '../Card'
import TransactionsList from '../TransactionsList'
import IncomeForm from '../IncomeForm'
import ExpenseForm from '../ExpenseForm'
import Button from '../Button'

import * as S from './styles'

const Dashboard = () => {
  const { items } = useSelector((state: RootReducer) => state.transactions)
  const [isVisible, setIsVisible] = useState(false)
  const [type, setType] = useState<'income' | 'expense'>('income')

  const getResumo = () => {
    let income = 0
    let expense = 0

    items.forEach((item) => {
      if (item.type === 'income') {
        income += item.amount
      } else {
        expense += item.amount
      }
    })

    return {
      income,
      expense,
      balance: income - expense
    }
  }

  const { income, expense, balance } = getResumo()

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
              <Card title="Saldo em conta" value={income} color="#E6F0FF" />
            </li>
            <li>
              <Card title="Contas do mês" value={expense} color="#FFE6E6" />
            </li>
            <li>
              <Card title="Investimentos" value={0} color="#F6EFE3" />
            </li>
            <li>
              <Card title="Saldo final" value={balance} color="#E6F6E3" />
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
              active={type === 'income'}
              onClick={() => setType('income')}
              typeIcon="income"
            >
              Saldo
            </Button>
            <Button
              variant="secondary"
              active={type === 'expense'}
              onClick={() => setType('expense')}
              typeIcon="expense"
            >
              Conta
            </Button>
          </S.ButtonContainer>
          {type === 'income' ? (
            <IncomeForm onClose={closeModal} />
          ) : (
            <ExpenseForm onClose={closeModal} />
          )}
        </S.ModalContent>
      </S.Modal>
      <TransactionsList />
    </S.Container>
  )
}

export default Dashboard
