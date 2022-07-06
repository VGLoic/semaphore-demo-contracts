import { HardhatRuntimeEnvironment } from "hardhat/types";

const SEMAPHORE_GOERLI_ADDRESS = "0x99aAb52e60f40AAC0BFE53e003De847bBDbC9611";
const GROUP_ID = 123456789

async function deployFunction(hre: HardhatRuntimeEnvironment): Promise<void> {
    const { deployer } = await hre.getNamedAccounts();

    await hre.deployments.deploy("SemaphoreDemo", {
        from: deployer,
        args: [SEMAPHORE_GOERLI_ADDRESS, GROUP_ID],
        log: true
    });
}

deployFunction.tags = ["SemaphoreDemo"];

export default deployFunction;