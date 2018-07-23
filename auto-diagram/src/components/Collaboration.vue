<template>
      <div class="collaboration">
          <i :class = "struct.icon"></i> <span>{{struct.name}}</span>
      </div>
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
