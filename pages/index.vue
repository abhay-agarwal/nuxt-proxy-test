<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("http://localhost:3000/api/v1/test/")
console.log(data.value)
</script>