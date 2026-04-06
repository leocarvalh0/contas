import styled from 'styled-components'
import { Banknote } from 'lucide-react'

type ButtonProps = {
  $variant: 'primary' | 'secondary'
  $active?: boolean
}

type IconProps = {
  $active?: boolean
  $typeIcon?: 'income' | 'expense'
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${({ $variant, $active }) =>
    $variant === 'secondary' ? ($active ? '#fff' : '#ebebebd7') : '#28282e'};
  color: ${({ $variant, $active }) =>
    $variant === 'secondary' ? ($active ? '#000' : '#0000008a') : '#dddddd'};
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
  box-shadow: ${({ $active }) =>
    $active ? 'rgba(0, 0, 0, 0.24) 0px 3px 8px' : 'none'};
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

  color: ${({ $typeIcon }) =>
    $typeIcon === 'expense' ? '#e98080' : '#7dd367'};

  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
`
