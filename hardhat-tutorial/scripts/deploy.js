const {ethers} = require("hardhat");
require("dotenv").config({path: ".env"});
const {WHITELIST_CONTRACT_ADDRESS, METADATA_URL} = require("../constants");

async function main() {
    const cdFactory = await ethers.getContractFactory("CryptoDevs");
    const cd = await cdFactory.deploy(
        METADATA_URL, WHITELIST_CONTRACT_ADDRESS
    );

    console.log("Deployed to: ", cd.address);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });