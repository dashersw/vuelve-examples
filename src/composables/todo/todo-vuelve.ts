import vuelve from 'vuelve'

type Todo = {
  id: number
  text: string
  completed: boolean
}

export default vuelve({
  data() {
    return { todos: [] as Todo[] }
  },
  computed: {
    count() {
      return this.todos.length
    }
  },
  methods: {
    addTodo(text: string) {
      this.todos.push({
        id: this.todos.length + 1,
        text,
        completed: false
      })
    },
    removeTodo(todoId: number) {
      const index = this.todos.findIndex((todo) => todo.id === todoId)
      this.todos.splice(index, 1)
    },
    toggleTodo(todoId: number) {
      const todo = this.todos.find((todo) => todo.id === todoId)

      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
