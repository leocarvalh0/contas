import { Botao, Icon } from './styles'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  children?: React.ReactNode
  ativo?: boolean
  tipo?: 'saldo' | 'conta'
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  ativo,
  tipo
}: Props) => {
  return (
    <Botao onClick={onClick} $variant={variant} $ativo={ativo}>
      {variant === 'secondary' && <Icon $ativo={ativo} $tipo={tipo} />}
      {children}
    </Botao>
  )
}
export default Button
