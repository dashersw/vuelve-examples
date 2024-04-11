import { computed, ref } from 'vue'

export function useSpreadsheet() {
  const date = ref(1)
  const month = ref(4)
  const year = ref(2024)

  const dateDisplay = computed(() => {
    const newDate = new Date()

    newDate.setDate(date.value)
    newDate.setMonth(month.value - 1)
    newDate.setFullYear(year.value)

    return `Date: ${newDate.toDateString()}`
  })

  return {
    date,
    month,
    year,
    dateDisplay
  }
}
