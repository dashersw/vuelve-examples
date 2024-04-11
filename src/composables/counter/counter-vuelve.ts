import vuelve from 'vuelve'

export default vuelve({
  data: {
    count: 0
  },
  methods: {
    increment() {
      this.count.value++
    },
    decrement() {
      this.count.value--
    }
  },
  mounted() {
    this.increment()
  }
})
