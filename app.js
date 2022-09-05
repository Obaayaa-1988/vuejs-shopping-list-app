new Vue({
        el:"#shopping-list",

        data: {
            item: "",

          items: [
            "Buy Mangoes",
            "Buy Pineapples",
            "Buy Kiwi"

          ]
        },

        methods: {
            addItems(){
                this.items.push(this.item)
                this.item = ""
            }
        }

    });


// new Vue({
//   el: "#shopping-list",

//   data: {
//     output: "I love Banku and Tilapia"

//   },

//   methods: {
//     readRefs() {
//       // console.log(this.$refs.input.value)
//       this.output = this.$refs.input.value

//     }
//   }

// });