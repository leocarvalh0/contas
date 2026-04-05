import * as S from './styles'
import { adicionar } from '../../store/reducers/lancamentos'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import Button from '../Button'

type Props = {
  onClose: () => void
}

const FormularioSaldo = ({ onClose }: Props) => {
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      descricao: '',
      valor: '',
      data: '',
      categoria: '',
      tipo: ''
    },

    validationSchema: Yup.object({
      descricao: Yup.string().required('Campo obrigatório'),

      valor: Yup.number()
        .typeError('Digite um número válido')
        .positive('Deve ser maior que 0')
        .required('Campo obrigatório'),

      data: Yup.string().required('Campo obrigatório')
    }),

    onSubmit: (values) => {
      dispatch(
        adicionar({
          id: new Date().getTime(),
          descricao: values.descricao,
          valor: Number(values.valor),
          tipo: 'entrada',
          data: values.data,
          categoria: values.categoria
        })
      )
      console.log(form)
      form.resetForm()
      onClose()
    }
  })

  return (
    <S.Form onSubmit={form.handleSubmit}>
      <S.InputGroup>
        <div>
          <label htmlFor="name">Descrição</label>
          <input
            name="descricao"
            value={form.values.descricao}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={
              form.touched.descricao && form.errors.descricao ? 'error' : ''
            }
          />

          <label htmlFor="value">Valor</label>
          <input
            name="valor"
            value={form.values.valor}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={form.touched.valor && form.errors.valor ? 'error' : ''}
          />
        </div>
        <div>
          <label htmlFor="maturity">Data</label>
          <InputMask
            mask="99/99/9999"
            value={form.values.data}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={form.touched.data && form.errors.data ? 'error' : ''}
          >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input {...inputProps} name="data" />
            )}
          </InputMask>
          <label htmlFor="categoria">Categoria</label>
          <select
            name="categoria"
            value={form.values.categoria}
            onChange={form.handleChange}
            id="categoria"
          >
            <option value="casa">Casa</option>
            <option value="saude">Saúde</option>
            <option value="cartao">Cartão</option>
            <option value="comida">Comida</option>
          </select>
        </div>
      </S.InputGroup>
      <S.ContainerButton>
        <Button type="submit">Cadastrar</Button>
      </S.ContainerButton>
    </S.Form>
  )
}

export default FormularioSaldo
