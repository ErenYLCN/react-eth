import "./App.css";

import { Contract, ethers } from "ethers";

import Counter from "./artifacts/contracts/Counter.sol/Counter.json";

import {
  getEth,
  hasAccounts,
  requestAccounts,
} from "./eth/metamask/metamaskUtils";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [contract, setContract] = useState<Contract | null>(null);
  const [contractGetter, setContractGetter] = useState(null);

  const run = useCallback(async () => {
    if (!(await hasAccounts()) && !(await requestAccounts())) {
      throw new Error("Let me take your money !!");
    }
    const counter = new ethers.Contract(
      process.env.REACT_APP_CONTRACT_ADDRESS!,
      Counter.abi,
      // @ts-ignore
      new ethers.providers.Web3Provider(getEth()).getSigner()
    );

    setContract(counter);
    setContractGetter(await counter.getCounter());
  }, []);

  useEffect(() => {
    run();
  }, [run]);

  contract?.on(contract?.filters.CounterInc(), (count) => {
    console.log("event here");
    setContractGetter(count);
  });

  // @ts-ignore
  return (
    <div className="App">
      {contractGetter}
      <button onClick={increment}>{"increment"}</button>
    </div>
  );

  async function increment() {
    if (contract) {
      console.log(contract);
      await contract.count();
    }
  }
}

export default App;
