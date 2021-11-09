Vue.config.devtools = true

const vueApp = new Vue({
    el: '#root',
    data: {
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        arrayEmail: [],
    },
    methods: {
        createEmail() {
            this.arrayEmail = [];

            for (let i = 0; i < 10; i++) {
                // ajaxResponse = risposta di axios alla chiamata ajax. E' un oggetto che contiene vari dati,
                // tra cui la chiave "data", che conterrà la risposta ricevuta dal server.
                axios.get(this.apiUrl).then((ajaxResponse) => {
                    let serverCreate = ajaxResponse.data;
                    this.arrayEmail.push(serverCreate.response);
                })
            }
            console.log(this.arrayEmail)
        },
    },
    mounted() {

        this.createEmail(10);
        /*for (let i = 0; i < 10; i++) {
            axios.get(this.urlApi).then((element) => {
                this.arrayEmail.push(element.data.response)
            })
        }*/
    }
})