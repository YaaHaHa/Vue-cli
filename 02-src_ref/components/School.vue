<template>
  <div class="school">
      <h2>你好</h2>
      <h2>{{name}}</h2>
      <Student />
  </div>
</template>

<script>
import Student from './Student.vue'
export default {
    name:'School',
    data() {
        return {
            name:'家里蹲'
        }
    },
    components:{
        Student
    }
}
</script>

<style>
.school{
    background: skyblue;
}
</style>