import './App.css';
import { Card } from './components/Card'
import { ManipulandoEventos } from './components/ManipulandoEventos';
import { Relogio } from './components/Relogio';
import { ValorAleatorio } from './components/ValorAleatorio';
import { ComponentesControlados } from './components/ComponentesControlados';
import { Contador } from './components/Contador';


function App() {
  return (
    <div className="cards">
      <Card titulo="Manipulando eventos">
        <ManipulandoEventos/>
      </Card>
      <Card titulo="State">
      <Relogio/>
        <hr/>
        <ValorAleatorio max={100}/>
      </Card>
      <Card titulo="componente controlado">
        <ComponentesControlados/>
      </Card>
      <Card titulo="State Assincrono">
        <Contador/>
      </Card>
    </div>
  );
}

export default App;


