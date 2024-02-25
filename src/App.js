import "./App.css";
import Homepage from "./pages/Homepage";
import { useState, createContext } from "react";

// distribute the respective useState to where they are needed directly
function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [togglePledgeOne, setTogglePlegeOne] = useState(false);
  const [togglePledgeTwo, setTogglePledgeTwo] = useState(false);
  const [togglePledgeThree, setTogglePlegeThree] = useState(false);
  const [toggleCongratsModal, setToggleCongratsModal] = useState(false);

  let [OriginalTotalPrice, setOriginalTotalPrice] = useState(101);
  let [secondOriginalTotalPrice, setSecondOriginalTotalPrice] = useState(64);

  const [noPledgeAmount, setNoPledgeAmount] = useState();
  const [firstPledgeAmount, setfirstPledgeAmount] = useState();
  const [secondPledgeAmount, setsecondPledgeAmount] = useState();

  // CREATE A STATE THAT CHECK IF THE INPUT FIELD IS EMPTY

  const ContextValue = {
    toggleModal,
    setToggleModal,
    togglePledgeOne,
    setTogglePlegeOne,
    togglePledgeTwo,
    setTogglePledgeTwo,
    togglePledgeThree,
    setTogglePlegeThree,
    toggleCongratsModal,
    setToggleCongratsModal,
    OriginalTotalPrice,
    setOriginalTotalPrice,
    secondOriginalTotalPrice,
    setSecondOriginalTotalPrice,
    noPledgeAmount,
    setNoPledgeAmount,
    firstPledgeAmount,
    setfirstPledgeAmount,
    secondPledgeAmount,
    setsecondPledgeAmount,
  };

  return (
    <Mycontext.Provider value={ContextValue}>
      <div className="App">
        <Homepage />
      </div>
    </Mycontext.Provider>
  );
}

export const Mycontext = createContext();

export default App;
