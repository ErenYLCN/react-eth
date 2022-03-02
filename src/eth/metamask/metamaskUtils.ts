import { EthereumProvider } from "hardhat/types";

async function hasAccounts() {
  const eth = getEth();
  // @ts-ignore
  const accounts = (await eth.request({
    method: "eth_accounts",
  })) as string[];

  return accounts && accounts.length;
}

async function requestAccounts() {
  const eth = getEth();
  // @ts-ignore
  const accounts = (await eth.request({
    method: "eth_requestAccounts",
  })) as string[];

  return accounts && accounts.length;
}

function getEth() {
  // @ts-ignore
  const eth = window.ethereum as EthereumProvider;

  if (!eth) {
    throw new Error("get metamask and a positive attitude");
  }

  return eth;
}

export { hasAccounts, requestAccounts, getEth };
