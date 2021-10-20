<template>
    <div class="app">
        <!-- ref打定点获取元素或组件实例对象(vc) -->
        <h2 ref='h2Name'>{{name}}</h2>
        <School ref='school'/>
        <button @click="showThis">点我展示this</button>
    </div>
</template>

<script>
import School from './components/School'
export default {
  components: { School },
    name:'App',
    data() {
        return {
            name:'我是App中的name'
        }
    },
    comments:{School},
    methods: {
        showThis(){
            console.log('@this.$refs.h2Name',this.$refs.h2Name.innerHTML);
            // debugger;
            this.$refs.h2Name.innerHTML = '你基本谁啊？'
        }
    },
}

</script>

<style>

</style>