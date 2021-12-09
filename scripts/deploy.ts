import { ethers } from "hardhat"

const main = async () => {
    const gameContractFactory = await ethers.getContractFactory('MyEpicGame')
    const gameContract = await gameContractFactory.deploy(
        ['Steve', 'Link', 'Mario'],
        ["https://bafkreihiac44kut33ubzb433tpe6n5yfp32y5mmqurp7r4g766hcrkmgqu.ipfs.dweb.link/",
            "https://bafybeiabebwnd23qe7tqi2xhmblx57akzrjp2ku4k6qgbjbyidwwe4orhu.ipfs.dweb.link",
            "https://bafybeiaelhj6ovgygakqck4iih66mogbky4tzqjhhqnzpxirn2yaxpv33a.ipfs.dweb.link/"],
        [100, 200, 300],
        [25, 100, 50],
        "Bowser",
        "https://bafybeidc63goig257u52kclrvnvlwc5igj4s74ofb2vs6z4aefyzvuj44u.ipfs.dweb.link/",
        10000,
        50
    )

    await gameContract.deployed()
    console.log(`Contract deployed to: ${gameContract.address}`)


    // let txn;
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();

    // txn = await gameContract.attackBoss()
    // await txn.wait();

    // txn = await gameContract.attackBoss()
    // await txn.wait();

    // console.log("Done deploying and minting!");
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
