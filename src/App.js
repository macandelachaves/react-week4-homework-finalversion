import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />

        <footer className="text-center mt-5">
          This project was coded with ♥️ by Candela and is{" "}
          <a
            href="https://github.com/macandelachaves/react-week4-homework-finalversion"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://candiweather-react-week4.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
