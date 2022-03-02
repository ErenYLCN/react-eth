import "@nomiclabs/hardhat-ethers";
import { Contract } from "ethers";
import { deployContract } from "../src/eth/deploy/deployUtils";

async function count(contract: Contract) {
  await contract.count();
  console.log("Counter", await contract.getCounter());
}

deployContract("Counter").then(count);
