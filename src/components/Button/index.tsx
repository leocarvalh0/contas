import { ButtonContainer, Icon } from './styles'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
  active?: boolean
  typeIcon?: 'income' | 'expense'
}

const Button = ({
  children,
  onClick,
  variant = 'primary',
  active,
  typeIcon
}: Props) => {
  return (
    <ButtonContainer onClick={onClick} $variant={variant} $active={active}>
      {variant === 'secondary' && (
        <Icon $active={active} $typeIcon={typeIcon} />
      )}
      {children}
    </ButtonContainer>
  )
}
export default Button
