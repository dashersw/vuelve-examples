<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from '../composables/todo/todo'
import useTodoVuelve from '../composables/todo/todo-vuelve'

const text = ref('')

const { todos, addTodo, toggleTodo, removeTodo, count } = useTodo()

function addTodoLocal() {
  addTodo(text.value)
  addTodoVuelve(text.value)
  text.value = ''
}

function onKeyDown(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    addTodoLocal()
  }
}

const {
  todos: todosVuelve,
  addTodo: addTodoVuelve,
  toggleTodo: toggleTodoVuelve,
  removeTodo: removeTodoVuelve,
  count: countVuelve
} = useTodoVuelve()
</script>

<template>
  <main>
    <h1>To do application</h1>
    <input type="text" @keydown="onKeyDown" v-model="text" placeholder="What needs to be done?" />
    <button @click="addTodoLocal()">Add Todo</button>
    <div>Vue 3 Count: {{ count }}</div>
    <ol id="todo-list">
      <li v-for="todo in todos" :class="{ completed: todo.completed }" :key="todo.id">
        <span @click="toggleTodo(todo.id)">{{ todo.text }}</span>
        <button @click="removeTodo(todo.id)">&#10005;</button>
      </li>
    </ol>
    <div>Vuelve Count: {{ countVuelve }}</div>
    <ol id="todo-list">
      <li v-for="todo in todosVuelve" :class="{ completed: todo.completed }" :key="todo.id">
        <span @click="toggleTodoVuelve(todo.id)">{{ todo.text }}</span>
        <button @click="removeTodoVuelve(todo.id)">&#10005;</button>
      </li>
    </ol>
  </main>
</template>
