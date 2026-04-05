import './App.css'
import { useDocumentTitle } from './components/useDocumentTitle';

const App = () => {
  useDocumentTitle('Mi Aplicación');
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
    </div>
  );
};

export default App;