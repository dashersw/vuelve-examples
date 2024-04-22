import { computed, reactive } from 'vue'

type Todo = {
  id: number
  text: string
  completed: boolean
}

export function useTodo() {
  const todos = reactive([] as Todo[])

  function addTodo(text: string) {
    todos.push({
      id: todos.length + 1,
      text,
      completed: false
    })
  }

  function toggleTodo(todoId: number) {
    const todo = todos.find((todo) => todo.id === todoId)

    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function removeTodo(id: number) {
    const index = todos.findIndex((todo) => todo.id === id)
    todos.splice(index, 1)
  }

  const count = computed(() => todos.length)

  return {
    todos,
    count,
    addTodo,
    toggleTodo,
    removeTodo
  }
}
