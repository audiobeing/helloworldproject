const {ethers} = require("hardhat"); 

const main = async () => {

    const contract = await ethers.getContractFactory("NFTee");

    const deployedContract = await contract.deploy(); 

    await deployContract.deployed(); 

    console.log("NFT contract deployed to: ", deployedContract.address())


}

main()
.then(()=> process.exit(0))
.catch((error)=>{
    console.log(error); 
    process.exist(1); 
})