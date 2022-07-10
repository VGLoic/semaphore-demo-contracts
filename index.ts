import { MultiNetworkContractStore } from "contract-store";
import semaphoreDemoGoerli from "./deployments/goerli/SemaphoreDemo.json";
import semaphore from './artifacts/@semaphore-protocol/contracts/Semaphore.sol/Semaphore.json';

export * from "./typechain";

enum Network {
    goerli = 5,
}

const SEMAPHORE_GOERLI_ADDRESS = "0x99aAb52e60f40AAC0BFE53e003De847bBDbC9611";

export const contractStore = new MultiNetworkContractStore([Network.goerli]);

contractStore.registerContract(Network.goerli, "SEMAPHORE_DEMO", {
    abi: semaphoreDemoGoerli.abi,
    address: semaphoreDemoGoerli.address
});
contractStore.registerContract(Network.goerli, "SEMAPHORE", {
    abi: semaphore.abi,
    address: SEMAPHORE_GOERLI_ADDRESS
});