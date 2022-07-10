import * as dotenv from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-deploy";
import 'hardhat-deploy-ethers';
import "solidity-coverage";
import { address as SEMAPHORE_DEMO_GOERLI_ADDRESS } from './deployments/goerli/SemaphoreDemo.json';

dotenv.config();

const SEMAPHORE_GOERLI_ADDRESS = "0x99aAb52e60f40AAC0BFE53e003De847bBDbC9611";
const GROUP_ID = 123456789

if (process.env.SKIP_LOAD) {
  task("createGroup", "Create a group on Semaphore", async (_, hre) => {
    const [deployer] = await hre.ethers.getSigners()

    const { ISemaphore__factory } = await import("./typechain");

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

    const { ISemaphore__factory } = await import("./typechain");

    const semaphore = ISemaphore__factory.connect(
      SEMAPHORE_GOERLI_ADDRESS,
      deployer
    );

    const tx = await semaphore.updateGroupAdmin(GROUP_ID, SEMAPHORE_DEMO_GOERLI_ADDRESS);

    console.log("Update group admin tx submitted: ", tx.hash);

    await tx.wait();

    console.log("Group admin updated!");
  })
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: process.env.GOERLI_MNEMONIC || "",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 1
      }
    },
    hardhat: {
      chainId: 31337,
      accounts: {
        mnemonic: process.env.LOCALHOST_MNEMONIC || "",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20
      }
    },
  },
  namedAccounts: {
    deployer: 0
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
    coinmarketcap: process.env.COINMARKET_CAP_API_KEY
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
