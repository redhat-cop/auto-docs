<template>
      <div class="container">
          <p :class = "substruct.icon"></p> <span>{{substruct.name}}</span>
      </div>
</template>

<script>
  export default {
    props:['substruct'],
    name: "app-container"
  }
</script>

<style scoped>
.container {
    grid-row: 2;
    border-right: 2px solid #d8dcdd;
}
.container:last-child {
    border-right: none;
}


</style>
