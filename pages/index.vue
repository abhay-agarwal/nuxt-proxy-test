<template>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useFetch("http://localhost:4000/api/v1/test/")
console.log(error.value) 
</script>