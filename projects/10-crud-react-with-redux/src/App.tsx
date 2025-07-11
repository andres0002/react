// js
// react
// third
import { Toaster } from 'sonner';
// own
import './App.css';
import ListOfUsers from './components/ListOfUsers';
import CreateNewUser from './components/CreateNewUser';

function App() {
  return (
    <>
      <h1>Crud React With Redux</h1>
      <ListOfUsers />
      <CreateNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
