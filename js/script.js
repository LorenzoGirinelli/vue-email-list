Vue.config.devtools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            emailList: [],
        },
        mounted() {
            for (let i = 0; i < 10; i++) {
                axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                .then(response => {
                    this.i = response.data.response;
                    this.emailList.push(response.data.response)
                })
            }
        }
    }
)