<template>
  <div>
    <ul>
      <li v-for="m of list" :key="m.id">
        <!-- 这里利用v-bind解析""中的js语句，外面的那层引号不能少" -->
        <!-- <router-link :to="`/home/messages/details/${m.id}/${m.title}`">{{m.title}}</router-link
        >&nbsp;&nbsp; -->

        <!-- params参数形式的传参必须用命名路由，不然报错 -->
        <router-link :to="{
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        }">{{m.title}}</router-link>
        <button @click="pushJump(m)">push推进</button>
        <button @click="replaceJump(m)">replace推进</button>
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
    methods: {
      pushJump(m){
        // 编程式路由,push推入栈
        this.$router.push({
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        })
      },
      replaceJump(m){
        // 编程式路由，replace替换上一个记录
        this.$router.replace({
          name:'xiangqing',
          query:{
            id:m.id,
            title:m.title
          }
        })
      }
    },
};
</script>

<style>
</style>