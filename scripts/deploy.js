const hre = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners()
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello World", owner.address);
  await greeter.deployed();

  console.log(
    `contract successfully deployed to ${greeter.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
