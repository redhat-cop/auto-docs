<template>
      <i class="host"> <span>{{struct.name}}</span> </i>
</template>

<script>
  export default {
    props: ['struct'],
    name: 'app-hosting',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.host {
    margin: 5px;
    padding: 3px;
    border-bottom: 2px solid #d8dcdd;
}

.host:last-child {
    border-bottom: none;
}

</style>
