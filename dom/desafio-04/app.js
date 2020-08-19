new Vue({
    el: '#desafio',
    data: {
        encolher: false,
        destaque: false,
        classStyle: 'destaque',
        classStyle2: 'styleTest',
        classStyle3Alias: 'true',
        classStyle3: true,
        height: 400,
        progress: 0
    },
    watch: {
        classStyle3Alias(old, value) {
            this.classStyle3 = value !== 'fals';
        },

        classStyle3(old, value) {
        },
    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.destaque = this.encolher;
                this.encolher = !this.destaque;
            }, 1000);
        },
        iniciarProgresso() {
            const progress = setInterval(() => {
                this.progress++;

                if(this.progress === 100)
                    clearInterval(progress);

            }, 10);
        }
    }
})
