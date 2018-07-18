<template>
      <i class="test"> <span>{{struct.name}}</span> </i>
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

.test {
    border-bottom: 2px solid #d8dcdd;
    /* background: #a29bfe; */
    margin: 5px;
}
.test:last-child {
    border-bottom: none;
}
</style>
