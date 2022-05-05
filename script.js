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
            if(this.toAddTodo.todo.length > 1){

                const news = {
                    todo : this.toAddTodo.todo,
                    done : this.toAddTodo.done
                }
                
                this.todoLists.push(news)
                this.toAddTodo.todo = ""
            }
        },

        deleteMe(index){
            if(confirm(`Vuoi daver cancellare "${this.todoLists[index].todo}" ?`))
            this.todoLists.splice(index, 1)
        },

        doneCheck(index){
            this.todoLists[index].done = !this.todoLists[index].done
        }
    },

    mounted() {
        console.log("Working")
    },
})