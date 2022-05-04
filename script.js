console.log("Yes master");

const app = new Vue({
    el: "#app",
    data:{
        todoLists:[{
            todo: "buy bananas",
            done: false
        }],
        toAddTodo:{
            todo: "",
            done:false
        }
    },

    methods:{
        pushTodo(){
            const news = {
                todo : this.toAddTodo.todo,
                done : this.toAddTodo.done
            }
            this.todoLists.push(news)
            this.toAddTodo.todo = ""
        },

        deleteMe(index){
            this.todoLists.splice(index, 1)
        }
    },

    mounted() {
        console.log("Working")
    },
})