import './App.css';
import {Game} from './components/Game/'
import {Square} from './components/Square/'
import {Board} from './components/Board/'

function App() {
  return (
    <div className="jogoVelha">
      <Game/>
      <Square/>
      <Board/>
    </div>
  );
}

export default App;
