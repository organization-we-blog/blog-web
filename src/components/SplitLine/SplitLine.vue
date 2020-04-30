<template>
  <div :style="{width}" style="height: 1px;margin: 10px auto;background-color: #ccc;"></div>
</template>

<script>
  export default {
    name: "SplitLine",
    props: {
      width: {
        type: String,
        default: '100%'
      }
    }
  }
</script>

<style scoped>
</style>
