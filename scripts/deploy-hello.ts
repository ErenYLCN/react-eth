import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { deployContract } from "../src/eth/deploy/deployUtils";

async function sayHello(contract: Contract) {
  console.log("Say Hello:", await contract.hello());
}

deployContract("HelloWorld").then(sayHello);
