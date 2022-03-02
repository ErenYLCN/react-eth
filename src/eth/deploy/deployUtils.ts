import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function deployContract(contractName: string) {
  const contractFactory = await ethers.getContractFactory(contractName);
  const contract = await contractFactory.deploy();
  await contract.deployed();

  return contract;
}

export { deployContract };
