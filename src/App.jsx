import './App.css'
import { AppRouter } from './AppRouter.jsx'
import { PokemonProvider } from './context/PokemonProvider';

function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}

export default App;

