Vue.config.devtools = true

const vueApp = new Vue({
    el: '#root',
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        arrayEmail: [],
        pendingCalls: 0,
    },
    methods: {
        createEmail(numEmail) {
            this.arrayEmail = [];
            numEmail = parseInt(numEmail);
            //Mi stampa tutte le e-mail
            if (isNaN(numEmail) || this.pendingCalls > 0) {
                return;
            }
            this.pendingCalls = numEmail;

            let recivedEmail = [];

            for (let i = 0; i < numEmail; i++) {
                // ajaxResponse = risposta di axios alla chiamata ajax. E' un oggetto che contiene vari dati,
                // tra cui la chiave "data", che conterrà la risposta ricevuta dal server.
                axios.get(this.apiUrl).then((ajaxResponse) => {
                    recivedEmail.push(ajaxResponse.data?.response);
                    this.pendingCalls--;
                    if (this.pendingCalls === 0) {
                        this.arrayEmail = [...recivedEmail];
                    }
                });
            }
            console.log(this.arrayEmail)
        },
    },
    /*mounted() {

        this.createEmail(10);
        /*for (let i = 0; i < 10; i++) {
            axios.get(this.urlApi).then((element) => {
                this.arrayEmail.push(element.data.response)
            })
        }
    }*/
});