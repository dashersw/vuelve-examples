<script setup lang="ts">
import { useUser } from '../composables/user/user'
import useUserVuelve from '../composables/user/user-vuelve'

const { user, fetchUser } = useUser()

const { user: userVuelve, fetchUser: fetchUserVuelve } = useUserVuelve()
</script>

<template>
  <main>
    <h1>User info card</h1>
    <button @click="fetchUser">Fetch user</button>
    <div id="name">Name: {{ user?.name }}</div>
    <div id="city">City: {{ user?.address?.city }}</div>

    <button @click="fetchUserVuelve">Fetch user</button>
    <div id="name">Name: {{ userVuelve?.name }}</div>
    <div id="city">City: {{ userVuelve?.address?.city }}</div>
  </main>
</template>
