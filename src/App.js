import "./App.scss";
import { Game } from "./components/Game";

function App() {
  return (
    <div className="App2">
      <header className="App-header">
        <Game />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#E08E45"
            fill-opacity="1"
            d="M0,192L60,176C120,160,240,128,360,101.3C480,75,600,53,720,74.7C840,96,960,160,1080,165.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </header>
    </div>
  );
}

export default App;
