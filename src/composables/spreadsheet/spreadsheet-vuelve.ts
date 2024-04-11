import vuelve from 'vuelve'

export default vuelve({
  data: { date: 1, month: 4, year: 2024 },
  computed: {
    dateDisplay() {
      const newDate = new Date()

      newDate.setDate(this.date.value)
      newDate.setMonth(this.month.value - 1)
      newDate.setFullYear(this.year.value)

      return `Date: ${newDate.toDateString()}`
    }
  }
})
