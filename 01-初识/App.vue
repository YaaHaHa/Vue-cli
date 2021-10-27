<template>
<!-- 这里的Template标签依赖于 vue-template-compiler包，可以解析vue文件-->
    <div>
        <School />
        <Student />
    </div>
  
</template>

<script>
import School from './components/School'
import Student from './components/Student'
// 为什么用默认暴露？因为方便用
export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>

<style>

</style>