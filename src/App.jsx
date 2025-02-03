import { FaGithub } from "react-icons/fa";
import "./App.css";
import Input from "./components/Input";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header>
          <h1>Encrypt / Decrypt API 🔒</h1>
        </header>
        <main>
          <section>
            <h2>Caesar cipher 🏛️</h2>
            <p>
              <b>About</b>
            </p>
            <p>
              This is a simple service which lets the user encrypt a string
              using the Caesar cipher.{" "}
            </p>{" "}
            <a href="https://cryptii.com/pipes/caesar-cipher">
              Read more about the cipher
            </a>
            <p>
              <i>The API is hardcoded to use a key of 5</i>
            </p>
          </section>
          <section>
            <Input />
          </section>
        </main>
        <footer>
          <a href="https://github.com/aob123">
            <FaGithub size={25} />
          </a>

        </footer>
      </div>
    </>
  );
}

export default App;
