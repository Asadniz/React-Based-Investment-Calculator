import { useState } from "react";
import Header from "./components/Header.jsx";
import InputBoard from "./components/InputBoard.jsx";
import Result from "./components/Result.jsx";
import "./index.css";
function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const handleChange = (id, data) => {
    setInputData((prevData) => ({ ...prevData, [id]: data }));
  };
  const dataValidityFlag = inputData.duration > 0 && true;

  return (
    <div>
      <Header />
      <main>
        <InputBoard handleChange={handleChange} />
        {dataValidityFlag ? (
          <Result investmentData={inputData} />
        ) : (
          <p className="center"> Please enter duration greater than 0</p>
        )}
      </main>
    </div>
  );
}
export default App;
