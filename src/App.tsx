import Sobre from './containers/Sobre'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Projetos from './containers/Projetos'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
