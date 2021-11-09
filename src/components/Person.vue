<template>
  <div class="person">
      <h2>Count组件的和为：{{sum}}</h2>
      <ul>
          <li v-for="p of list" :key="p.id">
              {{p.name}}---{{p.age}}
          </li>
      </ul>
      <!-- 添加新人，双向绑定收集数据 -->
      <input type="text" placeholder="输入姓名" v-model="person">
      <button @click="add">添加</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
    name:'Person',
    data() {
        return {
            person:''
        }
    },
    computed:{
        // 映射vuex中personAbout模块保存的state
        ...mapState('personAbout',['list']),
        // 映射vuex中countAbout模块保存的stata
        ...mapState('countAbout',['sum'])
    },
    methods: {
        // 添加新人，向personAbout模块的mutations
        add(){
            this.$store.commit('personAbout/ADD_PERSON',{
                id:nanoid(),
                name:this.person,
            });
            this.person='';
        }
    },
}
</script>

<style>

</style>