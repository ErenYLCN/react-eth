import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import { expect } from "chai";
import { deployContract } from "../eth/util/ethUtils";

describe("hello world", () => {
  it("should say hi", async () => {
    const contract = await deployContract("HelloWorld");

    expect(await contract.hello()).to.equal("Hello, FEM");
  });
});
