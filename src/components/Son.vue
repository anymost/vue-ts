<template>
    <div>{{foo}}</div>
</template>

<style scoped lang="stylus">

</style>

<script lang="ts">

    import {Vue, Component, Inject} from 'vue-property-decorator';

    @Component
    export default class Main extends Vue {
      @Inject('foo')
      foo: string


    }

</script>
