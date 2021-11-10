<template>
  <div>
    <ul>
      <li v-for="m of list" :key="m.id">
        <!-- 这里利用v-bind解析""中的js语句，外面的那层引号不能少" -->
        <!-- <router-link :to="`/home/messages/details?id=${m.id}&title=${m.title}`">{{m.title}}</router-link
        >&nbsp;&nbsp; -->

        <!-- 推荐使用下面的这种方式，以为方便看，上面那种太长了 -->
        <!-- 命名路由更省功夫了 -->
          <!-- path:'/home/messages/details', -->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Messages",
  data() {
      return {
        list:[
          {id:'001',title:'消息001'},
          {id:'002',title:'消息002'},
          {id:'003',title:'消息003'},
        ]
      }
    },
};
</script>

<style>
</style>