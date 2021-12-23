import { ethers } from "hardhat"

const main = async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.deployed();

    console.log("Greeter deployed to:", greeter.address);
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

runMain()
