<template>
    <div>
        <i :class = "struct.icon"></i> <span>{{struct.name}}</span>
    </div>
</template>

<script>
  export default {
    props: ['struct'],
    name: 'app-test',
    data () {
      return {}
    }
  }
</script>

<style scoped>

div {
    border-bottom: 2px solid #d8dcdd;
    margin: 5px;
}
div:last-child {
    border-bottom: none;
}
</style>
