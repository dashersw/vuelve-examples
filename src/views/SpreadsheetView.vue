<script setup lang="ts">
import { useSpreadsheet } from '../composables/spreadsheet/spreadsheet'
import useSpreadsheetVuelve from '../composables/spreadsheet/spreadsheet-vuelve'

const { date, month, year, dateDisplay } = useSpreadsheet()

const {
  date: dateVuelve,
  month: monthVuelve,
  year: yearVuelve,
  dateDisplay: dateDisplayVuelve
} = useSpreadsheetVuelve()
</script>

<template>
  <main>
    <h1>Vuelve spreadsheet demo</h1>
    <input type="number" v-model="date" placeholder="Enter the date" />
    <input type="number" v-model="month" placeholder="Enter the month" />
    <input type="number" v-model="year" placeholder="Enter the year" />
    <div id="date">{{ dateDisplay }}</div>

    <input type="number" v-model="dateVuelve" placeholder="Enter the date" />
    <input type="number" v-model="monthVuelve" placeholder="Enter the month" />
    <input type="number" v-model="yearVuelve" placeholder="Enter the year" />
    <div id="date">{{ dateDisplayVuelve }}</div>
  </main>
</template>
