<script>
import VueMetamask from 'vue-metamask';

export default {
  components: {
            VueMetamask,
  },
  data(){
      return {
          msg: "This is demo net work",
          status : "Connect",
          connect : false,
      }
  },
  methods:{
      onComplete(data){
          console.log('data:', data);
          this.status = "Connected"
      },
      connect() {
          this.$refs.metamask.init();
          this.connect = true;
      }
  }
}
</script>



<template>
  <div class="about">
    <h1>ETH Wallet</h1>
    <div id="demo">
        <vue-metamask
            userMessage="msg"
            @onComplete="onComplete"
        >
        </vue-metamask>
    </div>
    <div id="demo">
    <vue-metamask ref="metamask" :initConnect="false" ></vue-metamask>
    <button @click="connect" class="button">Connect</button>
    </div>
    <div>
      <p>
        Ethereum wallets are applications that let you interact with your Ethereum account. Think of it like an internet banking app – without the bank. Your wallet lets you read your balance, send transactions and connect to applications.

      </p>
      <p>
        Your wallet is only a tool for managing your Ethereum account. That means you can swap wallet providers at any time. Many wallets also let you manage several Ethereum accounts from one application.
      </p>
    </div>
    <div>
      <h2>
        Types of wallets
      </h2>
      <div>
        <p>
          💿 Physical hardware wallets are devices that let you keep your crypto offline – very secure<br/> <br/>

          📱
          Mobile applications that make your funds accessible from anywhere <br/> <br/>

          🌐
          Browser wallets are web applications that let you interact with your account directly in the browser <br/> <br>

          🌐
          Browser extension wallets are extensions you download that let you interact with your account and applications through the browser <br><br>

          🖥️
          Desktop applications if you prefer to manage your funds via macOS, Windows or Linux
        </p>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
}
.button {
  border-radius: 0;
  height: 30px;
  width: 100px;
  background-color: #000000;
  color: #fff;
}
</style>
