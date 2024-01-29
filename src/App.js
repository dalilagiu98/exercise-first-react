import "./App.css";
import Button from "./button";
import Image from "./image";

function App() {
  return (
    <div className='App'>
      <Button text='Clicca qui!' />
      <Image Source='https://placekitten.com/300' Alt='kitten image' />
    </div>
  );
}

export default App;
