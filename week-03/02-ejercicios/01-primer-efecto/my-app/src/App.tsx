import { CounterBasic, CounterWithEffect } from './components/CounterBasic';
import { WelcomeMessage } from './components/WelcomeMessage';
import { MultipleEffects } from './components/MultipleEffects';
import './App.css';

const App = () => {
  return (
    <div>
      <CounterBasic />
      <CounterWithEffect />
      <WelcomeMessage />
      <MultipleEffects />
    </div>
  );
};

export default App;