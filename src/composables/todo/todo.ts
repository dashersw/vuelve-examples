import { computed, ref } from 'vue'

export function useTodo() {
  const todos = ref([] as { id: number; text: string; completed: boolean }[])

  function addTodo(text: string) {
    todos.value.push({
      id: todos.value.length + 1,
      text,
      completed: false
    })
  }

  function toggleTodo(todoId: number) {
    const todo = todos.value.find((todo) => todo.id === todoId)

    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function removeTodo(id: number) {
    const index = todos.value.findIndex((todo) => todo.id === id)
    todos.value.splice(index, 1)
  }

  const count = computed(() => todos.value.length)

  return {
    todos,
    count,
    addTodo,
    toggleTodo,
    removeTodo
  }
}
