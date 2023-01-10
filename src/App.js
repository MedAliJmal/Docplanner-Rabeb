import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Entete from "./component/entete/Entete";
import { Part1 } from "./component/part1/Part1";
import Part2 from "./component/part2/Part2";

function App() {
  return (
    <div className="App">
      <Entete />
      <Part1 />
      <Part2 />
    </div>
  );
}

export default App;
