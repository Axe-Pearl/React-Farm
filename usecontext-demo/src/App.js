import './App.css';
import TradWay from "./ContextAPI/TradWay";
import { createContext } from 'react';
import WithuseContext from './ContextAPI/WithuseContext';

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <FirstName.Provider value = {"Anurag"}>
        <LastName.Provider value = {"Nema"}>
            <TradWay />
            <WithuseContext />
        </LastName.Provider>
      </FirstName.Provider>

    </>
  );
}

export default App;
export {FirstName, LastName};