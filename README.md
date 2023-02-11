# test-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### How to run the contract
go to : https://github.com/rishavvajpayee/truffle
clone the project

install truffle
```
npm i truffle
```

compile and migrate your contract through truffle 🥇
```
truffle compile
```

```
truffle migrate
```

when you get the migrated output look for contract address and replace contractAddress in views/ContractView.vue with that.

similarly you'll get the ABI from build folder of (https://github.com/rishavvajpayee/truffle)
replace ContractABI in views.ContractView.vue


thanks 👍