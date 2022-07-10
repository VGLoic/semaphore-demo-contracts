
# Semaphore Demo Contracts

:warning: This application has been developed for educational purposes and should not be considered as a serious product :warning:

This repository contains the only and simple contract for this Semaphore demo app. The contract acts as a Semaphore group admin and allows anyone to join the managed group.

## Local Development

This repository is developped using [hardhat](https://hardhat.org/). One is free to directly use the available scripts from hardhat using `npx`, otherwise, a set of local script have been made in order to allow safe local development.

### Setup

#### Environment Variables

Proper environment variables are needed in order to run the various scripts
- `REPORT_GAS`: if truthy, the gas measurements of the tests will be translated in USD value. The `COINMARKET_CAP_API_KEY` environment variable will need to be set,
- `COINMARKET_CAP_API_KEY`: an API key for CoinMarket Cap in order to retrieve USD value of ETH,
- `ETHERSCAN_KEY`: an etherscan key used in order to verify the contracts on Etherscan,

#### Nvm

Use configured node and npm versions
```console
nvm use
```

Nvm installation instructions may be found [here](https://github.com/nvm-sh/nvm);

#### Dependencies

Install dependencies
```console
npm install
```

### Compile the smart contracts

```console
npm run compile
```

### Tests

Run all the tests
```console
npm run test
```

Obtain the test coverage
```console
npm run test:cover
```

### Solhint

Run a security and practices analysis by [solhint](https://github.com/protofire/solhint)
```console
npm run solhint
```