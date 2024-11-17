import "./App.css";
import { Btn1 } from "./components/btn";

function App() {
  const handleClick = () => {
    alert('Hi lokesh')
  };

  return (
    <div>
      <Btn1 label="submit" click={handleClick} BtnColor="red" />
      <Btn1 label="login" BtnColor="green"/>
    </div>
  );
}

export default App;
