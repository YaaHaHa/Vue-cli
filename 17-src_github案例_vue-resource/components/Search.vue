<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model='msg'
        />&nbsp;
        <button @click="getUsers">Search</button>
      </div>
    </section>
</template>

<script>

export default {
    name:'Search',
    data() {
        return {
            msg:''
        }
    },
    methods: {
        // 发送ajax请求，获取数据
        getUsers(){
            // 进入这里，说明肯定已经点了搜索，加载中替换欢迎界面
            this.$bus.$emit('saveUsers',{isFirst:false, isLoading:true,})
            this.$http.get(`https://api.github.com/search/users?q=${this.msg}`).then(
                response => {
                    console.log(response.data.items);
                    this.$bus.$emit('saveUsers',{isLoading:false, errMsg:'', Users:response.data.items})
                },
                error => {
                    this.$bus.$emit('saveUsers',{isLoading:false, errMsg:error.message, Users:[]});
                }
            )
            console.log(this);
        }
    },
}
</script>

