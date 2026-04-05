import { CardContainer } from './styles'

type Props = {
  title: string
  value: number
  color: string
}

const Card = ({ color, title, value }: Props) => {
  return (
    <CardContainer color={color}>
      <p>{title}</p>
      <span>$ {value}</span>
    </CardContainer>
  )
}

export default Card
