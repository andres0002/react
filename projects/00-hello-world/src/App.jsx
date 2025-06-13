// js
// react
// third
// own
import './App.css'
import { ButtonComponent } from './components/ButtonComponent';

// function.
const showMessage = (message) => {
  console.log(message);
}

export const App = () => {
  return (
    // <></> -> react.fragment.
    <>
      <ButtonComponent text="Click" onClick={() => showMessage("Hello World...")} />
    </>
  )
}