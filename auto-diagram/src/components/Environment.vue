<template>
  <div class="environment">
      <strong>{{ struct.name }}</strong>
      <app-container
        v-for="item in applications" :class="item.icon"
        v-bind:substruct="item">
      </app-container>
  </div>
</template>

<script>
import AppContainer from './AppContainer.vue'

  export default {
    props: ['struct', 'applications'],
    name: 'app-environment',
    components: {
      "app-container" : AppContainer
    },
    data () {
      return {}
    }
  }
</script>

<style scoped>
.environment {
    /* background-color: #81ecec; */
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 2px solid #d8dcdd;
}

.environment:last-child {
    border-bottom: none;
}
</style>
