<template>
  <div id="app">
    <input type="text" v-model="childProp">
    <HelloWorld @handleClick="handleClick" :childProp="childProp"></HelloWorld>
    <router-view/>
  </div>
</template>



<style scoped lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<script lang="ts">
  import {Vue,Component, Provide} from 'vue-property-decorator'
  import HelloWorld from './components/HelloWorld.vue'

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class App extends Vue{

      childProp: string|number = '';

      @Provide('foo')
      bar:string = 'hello';


      handleClick(value: Array<string|number>) {
        console.log(value)
      }
  }

</script>
