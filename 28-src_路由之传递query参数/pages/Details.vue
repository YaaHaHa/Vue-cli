<template>
  <div class="details">
    <!-- 路由传给Details组件的query参数这样拿 -->
    <h2>id：{{$route.query.id}}</h2>
    <h2>title：{{$route.query.title}}</h2>
  </div>
</template>

<script>
export default {
    name:'Details',
    mounted(){
      console.log(this.$route);
    }
}
</script>

<style>
.details{
  background-color: rgb(201, 201, 201);
}
</style>