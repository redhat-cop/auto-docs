<template>

  <div id="app">

      <div class="content-box-appdev">
          <div class="box-heading"><h2>Application Development</h2></div>

          <div class="content-box-collaboration">
              <div class="collaboration-wrapper">
                  <div class="sub-box-heading"> <h2>COLLABORATION</h2> </div>
                  <app-collaboration
                    v-for="item in input_data.stack.collaborationTools"
                    v-bind:struct="item">
                  </app-collaboration>
              </div>
          </div>
          <div class="content-box-environment">
             <div class="sub-box-heading"> <h2>ENVIRONMENT</h2> </div>
                 <app-environment :applications="input_data.stack.appContainers"
                    v-for="item in input_data.stack.environments"
                    v-bind:struct="item">
                  </app-environment>
              </div>
          <div class="content-box-source">
              <div class="source-wrapper">
                  <div class="sub-box-heading"> <h2>SOURCE CONTROL</h2> </div>
                  <app-source
                    v-for="item in input_data.stack.sourceControl"
                    v-bind:struct="item">
                  </app-source>
              </div>
          </div>

          <div class="content-box-test">
      	<div class="sub-box-heading"><h2>PIPELINE</h2></div>
              <div class="test-wrapper">
                  <app-test
                    v-for="item in input_data.stack.testLibraries"
                    v-bind:struct="item">
                  </app-test>
              </div>
          </div>
      </div>



    <div class="content-box-hosting">
	<div class="box-heading"><h2>HOSTING</h2></div>
        <div class="hosting-wrapper">
            <app-hosting
              v-for="item in input_data.stack.hosting"
              v-bind:struct="item">
            </app-hosting>
        </div>
    </div>




  </div>

</template>

<script>
import Collaboration from './components/Collaboration.vue'
import Environment from './components/Environment.vue'
import Hosting from './components/Hosting.vue'
import Source from './components/Source.vue'
import Test from './components/Test.vue'


import axios from 'axios';

var fileUpload = '/current-api.json';

export default {
  name: 'app',

  components: {
    'app-collaboration' : Collaboration,
    'app-environment' : Environment,
    'app-hosting' : Hosting,
    'app-source' : Source,
    'app-test': Test
  },

  data(){
    return{
      input_data: {},
      organization: ""
    }
  },

  mounted(){
    var vueScope = this;
    axios.get(fileUpload)
    .then(function (response) {
      vueScope.input_data = response.data;
      vueScope.organization = response.data.metadata.customerName;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Overpass');
html {
    font-family: Overpass;
}

* {
    padding: 5px;
}

#app {
    display: grid;
    grid-template-columns: [appdev-start test-start source-start hosting-start] auto [test-end environment-start] auto auto auto [source-end collaboration-start] auto [environment-end collaboration-end hosting-end appdev-end];
    grid-template-rows: [appdev-start test-start environment-start] auto auto auto [test-end environment-end collaboration-start source-start] auto [collaboration-end source-end appdev-end hosting-start] auto [hosting-end] 25px;
    grid-gap: 5px;
}

h2 {

    margin: 0px;
}



span {
    font-weight: normal;
}

.box-heading {
    margin: 0px;
    text-align: center;
    background: #bc202a;
    color: #fff;
    margin: 0px;
    grid-area: boxheading;
}

.sub-box-heading {
    margin: 0px;
    text-align: center;
    color: #bc202a;
    background-color: #fff;
    margin: 0px;
}


.organization-wrapper {
    grid-area: organization;
    display: grid;
    grid-column: 1fr 1fr;
    grid-row: 1fr;
}

.organization {
    border: 10px solid #d8dcdd;
    padding: 3px;

}

.content-box-appdev {
    border: 10px solid #d8dcdd;
    grid-area: appdev;
    display: grid;
    grid-template-columns: [boxheading-start test-start source-start] auto [test-end environment-start] auto auto auto [source-end collaboration-start] auto [environment-end collaboration-end boxheading-end];
    grid-template-rows: [boxheading-start] auto [boxheading-end test-start environment-start] auto auto auto [test-end environment-end collaboration-start source-start] auto [collaboration-end source-end];
    grid-gap: 5px;
}

.content-box-hosting {
    border: 10px solid #d8dcdd;
    grid-area: hosting;
}
.hosting-wrapper {
    display: grid;
    grid-row: repeat(2, 1fr);
}


.content-box-environment{
    grid-area: environment;

}
.environment-wrapper {
    display: grid;
    grid-row: repeat(3, 1fr);
}

.collaboration-wrapper {    grid-area: collaboration;
    display: grid;
    grid-row: repeat(2, 1fr);
}

.content-box-test{
    grid-area: test;
}
.test-wrapper {
    display: grid;
    grid-row: repeat(2, 1fr);

}

.content-box-source{
    grid-area: source;
}
.source-wrapper {
    display: grid;
    grid-row: repeat(1, 1fr);
}

</style>
