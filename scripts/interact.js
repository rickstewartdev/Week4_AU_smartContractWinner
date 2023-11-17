const hre = require("hardhat");
const { ethers, Wallet } = require("ethers");

const CONTRACT_ADDR = "0x586ff820f8e3aDD357368feF37DEb3f6ed8D20b5";
const WINNING_CONTRACT_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
async function main() {
  const contract = await hre.ethers.getContractAt("Emitter", CONTRACT_ADDR);
  //console.log(contract);
  const resp = await contract.emitter(WINNING_CONTRACT_ADDR);

  console.log(await resp.wait());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
