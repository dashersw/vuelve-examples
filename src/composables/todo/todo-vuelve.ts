import vuelve from 'vuelve'

export default vuelve({
  data: { todos: [] },
  computed: {
    count() {
      return this.todos.value.length
    }
  },
  methods: {
    addTodo(text: string) {
      this.todos.value.push({
        id: this.todos.value.length + 1,
        text,
        completed: false
      })
    },
    removeTodo(todoId: number) {
      const index = this.todos.value.findIndex((todo) => todo.id === todoId)
      this.todos.value.splice(index, 1)
    },
    toggleTodo(todoId: number) {
      const todo = this.todos.value.find((todo) => todo.id === todoId)

      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})
