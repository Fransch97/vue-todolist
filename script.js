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
                todo : "" + this.toAddTodo.todo,
                done : this.toAddTodo.done
            }
            this.todoLists.push(news)
            
                
        }
    },

    mounted() {
        console.log("Working")
    },
})