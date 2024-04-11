import { ref } from 'vue'

export function useUser() {
  const user = ref(undefined)

  async function fetchUser() {
    const randomId = Math.floor(Math.random() * 10) + 1
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)

    const fetchedUser = await response.json()

    user.value = fetchedUser
  }

  return {
    user,
    fetchUser
  }
}
