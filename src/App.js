import profile from './profile.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Este es mi Hola Mundo de React - Cindy Reyes
        </p>
        <a
          className="App-link"
          href="http://www.utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR EL SITIO WEB DE LA UTD
        </a>
      </header>
    </div>
  );
}

export default App;
