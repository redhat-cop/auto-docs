<template>
  <div class="environment">
      <p class="title"> <strong>{{ struct.name }}</strong> </p>
      <app-container
        v-for="item in applications"
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
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
    "e e e"
    "o o o";
    border-bottom: 2px solid #d8dcdd;
}

.environment:last-child {
    border-bottom: none;
}

.title {
    grid-area: e;
}
</style>
