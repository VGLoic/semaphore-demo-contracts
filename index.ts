import { ContractStore } from "contract-store";
import semaphoreDemoGoerli from "./deployments/goerli/SemaphoreDemo.json";
import semaphore from './artifacts/@semaphore-protocol/contracts/interfaces/ISemaphore.sol/ISemaphore.json';

export * from "./typechain";

enum Network {
    goerli = 5,
}

const SEMAPHORE_GOERLI_ADDRESS = "0x99aAb52e60f40AAC0BFE53e003De847bBDbC9611";

export const contractStore = new ContractStore({
    networks: {
        [Network.goerli]: {
            abis: {
                SEMAPHORE_DEMO: semaphoreDemoGoerli.abi,
                SEMAPHORE: semaphore.abi
            },
            deployments: {
                SEMAPHORE_DEMO: {
                    address: semaphoreDemoGoerli.address,
                    abiKey: "SEMAPHORE_DEMO"
                },
                SEMAPHORE: {
                    address: SEMAPHORE_GOERLI_ADDRESS,
                    abiKey: "SEMAPHORE"
                },
            }
        }
    },
    globalAbis: {}
});