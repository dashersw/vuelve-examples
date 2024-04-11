import vuelve from 'vuelve'

export default vuelve({
  data: { user: undefined },
  methods: {
    async fetchUser() {
      const randomId = Math.floor(Math.random() * 10) + 1
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)

      const fetchedUser = await response.json()

      this.user.value = fetchedUser
    }
  }
})
