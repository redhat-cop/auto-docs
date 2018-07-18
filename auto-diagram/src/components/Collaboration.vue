<template>
      <i class="collaboration"> <span>{{ struct.name }}</span> </i>
</template>

<script>
  export default {
    props: ['struct'],
    name: 'app-collaboration',
    data () {
      return {}
    }
  }
</script>

<style scoped>
.collaboration {
    margin: 5px;
    /* background-color: #55efc4; */
    border-bottom: 2px solid #d8dcdd;
}

.collaboration:last-child {
    border-bottom: none;
}

</style>
