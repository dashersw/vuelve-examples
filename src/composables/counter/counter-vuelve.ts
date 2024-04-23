import vuelve from 'vuelve'

export default vuelve({
  data() {
    return  {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count.value++
    },
    decrement() {
      this.count.value--
    }
  },
})
