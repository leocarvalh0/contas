import { Provider } from 'react-redux'
import { Container, GlobalCss } from './styles'
import store from './store'
import BarraLateral from './Components/BarraLateral'
import Dashboard from './Components/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <GlobalCss />
      <Container className="container">
        <BarraLateral />
        <Dashboard />
      </Container>
    </Provider>
  )
}
export default App
