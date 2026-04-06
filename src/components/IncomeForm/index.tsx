import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'

import { add } from '../../store/reducers/transactions'
import { Category } from '../../utils/enums/Category'
import { FormValues } from '../ExpenseForm'

import Button from '../Button'

import * as S from './styles'

type Props = {
  onClose: () => void
}

const IncomeForm = ({ onClose }: Props) => {
  const dispatch = useDispatch()

  const form = useFormik<FormValues>({
    initialValues: {
      description: '',
      amount: '',
      date: '',
      category: Category.CASA
    },

    validationSchema: Yup.object({
      description: Yup.string().required('Campo obrigatório'),

      amount: Yup.number()
        .typeError('Digite um número válido')
        .positive('Deve ser maior que 0')
        .required('Campo obrigatório'),

      date: Yup.string().required('Campo obrigatório')
    }),

    onSubmit: (values) => {
      dispatch(
        add({
          id: new Date().getTime(),
          description: values.description,
          amount: Number(values.amount),
          type: 'income',
          date: values.date,
          category: values.category
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
            name="description"
            value={form.values.description}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={
              form.touched.description && form.errors.description ? 'error' : ''
            }
          />

          <label htmlFor="value">amount</label>
          <input
            name="amount"
            value={form.values.amount}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={form.touched.amount && form.errors.amount ? 'error' : ''}
          />
        </div>
        <div>
          <label htmlFor="maturity">date</label>
          <InputMask
            mask="99/99/9999"
            value={form.values.date}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            className={form.touched.date && form.errors.date ? 'error' : ''}
          >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input {...inputProps} name="date" />
            )}
          </InputMask>
          <label htmlFor="category">category</label>
          <select
            name="category"
            value={form.values.category}
            onChange={(e) =>
              form.setFieldValue('category', e.target.value as Category)
            }
          >
            <option value={Category.CASA}>Casa</option>
            <option value={Category.SAUDE}>Saúde</option>
            <option value={Category.CARTAO}>Cartão</option>
            <option value={Category.COMIDA}>Comida</option>
          </select>
        </div>
      </S.InputGroup>
      <S.ContainerButton>
        <Button type="submit">Cadastrar</Button>
      </S.ContainerButton>
    </S.Form>
  )
}

export default IncomeForm
