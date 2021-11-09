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
        // 映射vuex中保存的state
        ...mapState(['list','sum']),
    },
    methods: {
        // 添加新人
        add(){
            this.$store.commit('ADD_PERSON',{
                id:nanoid(),
                name:this.person,
            })
        }
    },
}
</script>

<style>

</style>