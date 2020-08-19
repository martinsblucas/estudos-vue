new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Exibindo um alerta');
        },

        refreshValue(event) {
            this.valor = event.target.value;
        }
    }
})