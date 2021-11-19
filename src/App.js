/*import logo from './logo.svg';*/
/*import './App.css';*/


import './styles.css'
import NavBar from './components/NavBar'

function App() {

  const estilos = {
    border: "2px red solid",
    marginTop : "50px"
  }

  const titulo = "Hola Mundo!"

    return (

   <div className="mi-app">
     
 <NavBar />     

     <h2>{ titulo }</h2>
     
  <section style={estilos}>
          <p>LOREM ipsum </p>
        </section>

 
    </div>
  );
}
 
export default App;
