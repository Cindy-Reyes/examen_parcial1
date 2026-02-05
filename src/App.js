import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>Evaluación parcial 1</h1>
        <p>
          Alumno(a): Cindy Alejandra Reyes Arce
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/cindy-alejandra-reyes-arce-6b78383aa?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN DE MI PROFILE
        </a>
        <br></br>
        <a
          className="App-link"
          href="http://127.0.0.1:5500/reyes_parcial1/public/descargas/descargas.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOCUMENTACIÓN PARCIAL 1
        </a>
      </header>
    </div>
  );
}

export default App;
