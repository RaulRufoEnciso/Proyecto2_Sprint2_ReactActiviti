import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Activitar on hem de crear un componenet i passar dferents valors</h1>
      <div class="cuadradoGrande">
        <Imagen/>
        {/* name, job, description son props del componente Info */}
        <Info name="Raul Rufo" job="Pastiser" description="Neque porro quisquam est qui "/>
      </div>
      <div class="cuadradoGrande">
        <Imagen/>
        {/* name, job, description son props del componente Info */}
        <Info name="Kevin Sama" job="Flequer" description="Neque porro quisquam est qui "/>
      </div>
    </div>
  );
}
/* Componente que devuelve una imagen */
const Imagen = () => {
  return(
  <div>
    <img src="Imagenes/espagetis.jpg"></img>
  </div>)
}
/* Componente que devuelce informacion del trabajador utilizando props, los props se definen en App */
const Info = (props) => {
  return(
    <div>
      <p>{props.name}</p>
      <p>{props.job}</p>
      <p>{props.description}</p>
    </div>
  )
}
export default App;
