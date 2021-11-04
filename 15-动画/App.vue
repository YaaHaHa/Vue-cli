<template>
  <div id="root">
  <Hello />
  <Hello2 />
  <Hello3 />
</div>
</template>

<script>
import Hello from './components/Hello.vue'
import Hello2 from './components/Hello2.vue'
import Hello3 from './components/Hello3.vue'

export default {
  name:'App',
  components:{
    Hello,
    Hello2,
    Hello3
  }
}
</script>

<style>

</style>