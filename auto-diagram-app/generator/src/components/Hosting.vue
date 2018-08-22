<template>
      <div class="host">
          <i :class = "struct.icon"></i> <span>{{struct.name}}</span>
      </div>
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

.textInside {
    font-family: Overpass;

}


</style>
