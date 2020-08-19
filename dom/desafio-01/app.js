new Vue({
    el: "#desafio",
    data: {
        name: "Lucas Martins",
        age: 26,
        img: "https://images.daznservices.com/di/library/GOAL/5c/d0/german-cano-vasco-oriente-petrolero-sul-americana-04-02-2020_kwn9ywm9s64i10dzpquscf31j.jpg?t=419451312&quality=100",
    },
    methods: {
        multiplyAge(times) {
            return this.age * times;
        },
        randomNumber() {
           return Math.random();
        }
    }
});