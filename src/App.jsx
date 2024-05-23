import Navegador  from "./components/Navegador";
import Cards  from "./components/Cards";
import Button from 'react-bootstrap/Button';

function App() {

  return (
    <>
      <Navegador/>
      <h2> Weather</h2>
      <Cards tittle="Vendooo" body="Quiero vender esto" variant="primary" textbutton="Vender"/>
      <Cards tittle="Compro" body="Quiero comprar esto" variant="outline-warning" textbutton="Comprar"/>
      <Button variant="outline-light">Light</Button>
    </> 
  )
}

export default App
