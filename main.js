const app = new Vue({
    el: '#app',
    data: {
        title: "Contador con VueJS",
        count: 0,
    },
    methods: {
        disCount(){
            this.count -= 1
            console.log("-1")
        },
        addCount(){
            this.count += 1
            console.log("+1")
        }
    }
});