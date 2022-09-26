const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello World", "0x0b1302c23d9EB4B42A74cbefc4f9b3081ff1bf18");
  await greeter.deployed();

  console.log(
    `contract successfully deployed to ${greeter.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
