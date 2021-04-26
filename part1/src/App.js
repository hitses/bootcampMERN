import './App.css';
import Mensaje from './Mensaje'

const App = () => {
  const mensaje = '"Hola, mundo"'
  const a = 12
  const b = 10

  return (
    <div className="App">
      <Mensaje color="coral" msg='Estamos trabajando'/>
      <Mensaje color="cornflowerblue" msg='en el curso'/>
      <Mensaje color="firebrick" msg='de React'/>
      <strong>Estamos trabajando en ello...</strong>
      <div>
        <p>El resultado de {a}+{b}={a + b}</p>
      </div>
      {`${mensaje} desde variable.`}
    </div>
  );
}

export default App;
