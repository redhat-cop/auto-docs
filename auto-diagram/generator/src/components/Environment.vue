<template>
  <div class="environment">
      <p> <strong>{{ struct.name }}</strong> </p>
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

* {
    padding: 0px !important;
}

.environment {
    /* background-color: #81ecec; */
    /* margin: 5px; */
    display: grid;
    grid-template-rows: auto, auto;
    grid-template-columns: 1fr 1fr 1fr;

    border-bottom: 2px solid #d8dcdd;
}

.environment:last-child {
    border-bottom: none;
}

</style>
