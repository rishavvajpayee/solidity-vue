<script>
import axios from "axios";

export default {
    data() {
        return {
            message : null,
            toAccount : null,
            fromAccount : null,
            privateKey : null,
            amount : null,
            postcallmessage: null,
        }
    },
    mounted(){
        this.getcall();
    },

    methods : {
        getcall(){
            try {
                axios.get('http://127.0.0.1:8000/')
                .then(response => this.message = response["data"]["message"]);
            }catch (err) {
                this.message = err;
            }
        },

        postcall()
        {
            if (this.amount == null || this.toAccount == null || this.fromAccount == null || this.privateKey == null )
            {
                this.postcallmessage = "request body not Filled Correctly"
            }
            else
            {
                const requestbody =
                    {
                        "to_account" : this.toAccount,
                        "from_account" : this.fromAccount,
                        "private_key" : this.privateKey,
                        "amount" : this.amount
                    };
            try
                {
                    axios.post('http://127.0.0.1:8000/api', requestbody)
                    .then(response => this.postcallmessage = response)
                }
            catch (err)
                {
                    this.postcallmessage = err;
                }
            }
        }
    }
}
</script>

<template>
    <h1>{{ message }}</h1>
    <div class="all">
        <input v-model="toAccount" placeholder="To">
    </div>
    <div class="all">
        <input v-model="fromAccount" placeholder="From">
    </div >
    <div class="all">
        <input v-model="privateKey" placeholder="Private Key">
    </div>
    <div class="all">
        <input v-model="amount" placeholder="Amount">
    </div>
    <div class="all">
        <button @click="postcall">send ETH</button>
    </div>
    <div>
        <h1>{{ this.postcallmessage }}</h1>
    </div>
</template>

<style>
.all{
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
}
</style>