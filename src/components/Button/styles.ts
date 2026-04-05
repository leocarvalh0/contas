import styled from 'styled-components'
import { Banknote } from 'lucide-react'

type BotaoProps = {
  $variant: 'primary' | 'secondary'
  $ativo?: boolean
}

type IconProps = {
  $ativo?: boolean
  $tipo?: 'saldo' | 'conta'
}

export const Botao = styled.button<BotaoProps>`
  background-color: ${({ $variant, $ativo }) =>
    $variant === 'secondary' ? ($ativo ? '#fff' : '#ebebebd7') : '#28282e'};
  color: ${({ $variant, $ativo }) =>
    $variant === 'secondary' ? ($ativo ? '#000' : '#0000008a') : '#dddddd'};
  border: ${({ $variant }) => ($variant === 'secondary' ? 'none' : '')};
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 14px;
  max-width: 300px;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: ${({ $ativo }) =>
    $ativo ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none'};
  transition: ${({ $variant }) =>
    $variant === 'secondary' ? '' : '0.3s ease'};

  &:hover {
    transform: ${({ $variant }) =>
      $variant === 'secondary' ? '' : 'scale(1.1)'};
    transition: ${({ $variant }) =>
      $variant === 'secondary' ? '' : '0.3s ease'};
  }
`

export const Icon = styled(Banknote)<IconProps>`
  height: 20px;

  color: ${({ $tipo }) => ($tipo === 'conta' ? '#e98080' : '#7dd367')};

  opacity: ${({ $ativo }) => ($ativo ? 1 : 0.5)};
`
