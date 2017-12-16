<template>
  <div class="hello">
    <h2>{{childProp}}</h2>
    <input type="text" v-model="task">
    <input type="button" value="add" @click="addTask">
    <input type="button" value="click" @click="emitTasks(Object.assign([], tasks))">
    <Foo></Foo>
  </div>
</template>


<style scoped lang="stylus" >
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

<script lang="ts">
  import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator';
  import Foo from './Son.vue';

  @Component({
    components: {
      Foo
    }
  })
  export default class HelloWorld extends Vue{

    @Prop({
      type: String,
      required: true
    })
    childProp: string|number;

    tasks: Array<number|string> = [];

    task: string|number = '';

    addTask() {
      this.tasks.push(this.task);
      this.task = '';
    }

    @Watch('task')
    onTaskChange(oldValue: string|number, newValue: string|number) {
      console.log(`oldValue ${oldValue}`);
      console.log(`newValue ${newValue}`);
    }

    @Emit('handleClick')
    // 函数的参数值即是emit的payload
    emitTasks(tasks: Array<string|number>) {
      this.tasks[0] = 'haha';
    }
  }
</script>


