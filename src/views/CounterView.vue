<script setup lang="ts">
import { useCounter } from '../composables/counter/counter'
import useCounterVuelve from '../composables/counter/counter-vuelve'

const { count, increment, decrement } = useCounter()

const {
  count: countVuelve,
  increment: incrementVuelve,
  decrement: decrementVuelve
} = useCounterVuelve()
</script>

<template>
  <main>
    <h1>Vuelve counter demo</h1>
    <div>
      <p>Counter: {{ count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>

    <div>
      <p>Counter Vuelve: {{ countVuelve }}</p>
      <button @click="incrementVuelve">Increment Vuelve</button>
      <button @click="decrementVuelve">Decrement Vuelve</button>
    </div>
  </main>
</template>
