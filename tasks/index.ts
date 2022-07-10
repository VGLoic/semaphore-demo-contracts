import {  task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import 'hardhat-deploy-ethers';
import "solidity-coverage";
import { address as SEMAPHORE_DEMO_GOERLI_ADDRESS } from '../deployments/goerli/SemaphoreDemo.json';

const SEMAPHORE_GOERLI_ADDRESS = "0x99aAb52e60f40AAC0BFE53e003De847bBDbC9611";
const GROUP_ID = 123456789

task("createGroup", "Create a group on Semaphore", async (_, hre) => {
    const [deployer] = await hre.ethers.getSigners()

    const { ISemaphore__factory } = await import("../typechain");

    const semaphore = ISemaphore__factory.connect(
      SEMAPHORE_GOERLI_ADDRESS,
      deployer
    )

    const tx = await semaphore.createGroup(
      GROUP_ID,
      20,
      0,
      deployer.address
    );
    console.log("Create group tx submitted: ", tx.hash);

    await tx.wait();
    console.log("Group created");
  });

  task("updateGroupAdmin", "Update group admin on Semaphore", async (_, hre) => {
    const [deployer] = await hre.ethers.getSigners()

    const { ISemaphore__factory } = await import("../typechain");

    const semaphore = ISemaphore__factory.connect(
      SEMAPHORE_GOERLI_ADDRESS,
      deployer
    );

    const tx = await semaphore.updateGroupAdmin(GROUP_ID, SEMAPHORE_DEMO_GOERLI_ADDRESS);

    console.log("Update group admin tx submitted: ", tx.hash);

    await tx.wait();

    console.log("Group admin updated!");
  })