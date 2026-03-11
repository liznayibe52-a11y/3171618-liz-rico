import './App.css'
import { Button } from './components/Button';

function App() {

  const handleClick = () => {
    alert('¡Botón clickeado!');
  };

  return (
    <div>
      <Button text="Primary" onClick={handleClick} variant="primary" />
      <Button text="Secondary" onClick={handleClick} variant="secondary" />
      <Button text="Disabled" onClick={handleClick} disabled />
      <Button text="Enviar" onClick={() => alert("Enviado")} variant="primary"/>
    </div>
  );
}

export default App;
