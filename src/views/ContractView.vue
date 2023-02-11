<script>
import Web3 from "web3"
4
export default {
  data() {
    return {
      value: null,
      data: null,
      web3 : null,
      contract : null,
      amount : null,
      to : null,
      accounts : null,
      getBalanceOf: null,
      balanceOf : null,
      contractAddress : "0x50DDCAb63C85C1b0CbdeC16EbA1f43CF20753716",
      contractABI:  // --> copy and paste you contract ABI here
      [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address payable",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "stateMutability": "payable",
          "type": "receive",
          "payable": true
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "withdraw",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getBalance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
            }
          ],
          "name": "transfer",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_address",
              "type": "address"
            }
          ],
          "name": "getBalanceOfAccount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "constant": true
        }
      ] // --> this is an example ABI remove this and add yours
    }
  },

  async created () {
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545')) // --> add your contract address.
    this.contract = new this.web3.eth.Contract(this.contractABI, this.contractAddress)
  },

  mounted() {
    this.getbalance()
    this.getData()
  },

  methods: {
    async getData(){
      this.accounts = await this.web3.eth.getAccounts()
    },

    async transferTo() {
      const ethamount = Web3.utils.toWei(this.amount, "ether")
      console.log(ethamount)
      console.log(this.to)
      await this.contract.methods.transfer(this.to, ethamount).send({from : this.accounts[0], to : this.to})
      this.getbalance()
    },

    async change(newValue) {
      const etherValue = Web3.utils.fromWei( newValue.toString(), 'ether')
      console.log(etherValue)
      return etherValue
    },
    async getbalance() {
      try {
        this.data = await this.contract.methods.getBalance().call()
        this.data = Web3.utils.fromWei( this.data.toString(), 'ether')
      } catch (err) {
        console.log(err)
      }
    },

    async withdraw(){
      const etherValue = this.value.toString()
      // this.accounts =  await this.web3.eth.getAccounts()
      await this.contract.methods.withdraw( Web3.utils.toWei(etherValue, "ether")).send({from: this.accounts[0]})
      this.getbalance()
    },

    async getWithdraw(){
      try{
        await this.withdraw()
        console.log("Transfer Complete")
      }catch (err){
        console.log(err)
      }
    },

    async getbalanceOf(){
      this.balanceOf = await this.contract.methods.getBalanceOfAccount(this.getBalanceOf).call()
      this.balanceOf = Web3.utils.fromWei( this.balanceOf.toString(), 'ether')
    }
  }
}
</script>

<template>
  <div>
    <div class="all">
        <h1>contract address</h1>
    </div>
    <div class="all" v-if="this.contractAddress != null"><h3>{{ this.contractAddress}}</h3></div>
    <div class="all">
      <h1>{{ data }} ETH</h1>
    </div>
    <div class="all">
      <div class="amount">
        <input v-model="value" placeholder="Amount">
      </div>
      <div>
        <button @click="getWithdraw">
          Withdraw
        </button>
      </div>
    </div>
    <div class="transfer all" >
      <div class="trnsfr">
        <h2>Transfer</h2>
      </div>
      <div class="all">
        <input v-model="to" placeholder="transfer to address">
      </div>
      <div class="all">
        <input v-model="amount" placeholder="amount to transfer">
      </div>
      <button @click="transferTo">transfer</button>
    </div>
    <div class=" all" >
      <div>
        <h2>Get balance</h2>
      </div>
      <div>
        <input v-model="getBalanceOf" placeholder="address">
        <p>{{ balanceOf }}</p>
      </div>
      <div>
        <button @click="getbalanceOf">Get Balance</button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  /* background-color: #000;
  color: rgb(255, 255, 255); */
  font-family: 'Courier New', Courier, monospace;
}

.all{
  padding: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
}

.amount{
  margin: 10px;
}

</style>



