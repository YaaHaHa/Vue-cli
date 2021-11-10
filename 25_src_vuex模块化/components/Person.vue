<template>
  <div class="person">
      <h2>Count组件的和为：{{sum}}</h2>
      <ul>
          <li v-for="p of list" :key="p.id">
              {{p.name}}---{{p.age}}
          </li>
      </ul>
      <h2>列表中第一个人是：{{firstName}}</h2>
      <!-- 添加新人，双向绑定收集数据 -->
      <input type="text" placeholder="输入姓名" v-model="person">
      <button @click="add">添加</button>
      <button @click="addwang">添加姓王的</button>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapState,mapGetters} from 'vuex'
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
        ...mapState('countAbout',['sum']),

        // 映射person模块的getter
        // ...mapGetters('personAbout',['firstName'])
        firstName(){
            return this.$store.getters['personAbout/firstName'];
        }
    },
    methods: {
        // 添加新人，向personAbout模块的mutations联系
        add(){
            this.$store.commit('personAbout/ADD_PERSON',{
                id:nanoid(),
                name:this.person,
            });
            this.person='';
        },
        addwang(){
            this.$store.dispatch('personAbout/addwang',{
                id:nanoid(),
                name:this.person
            })
        }
    },
    mounted() {
        console.log(this.$store)
    },
}
</script>

<style>

</style>