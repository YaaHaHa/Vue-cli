
export default{
    install(Vue){
        // 全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        });
        // 自定义全局指令
        Vue.directive('fbing',{
            // 指令与元素成功绑定时
            bind(element,binding){
                element.value = binding.value;
            },
            // 指令所在元素插入页面时
            inserted(element){
                element.focus()
            },
            //指令所在的模板被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        });
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:10
                }
            },
        });
        // 重量级使用出现了！！在Vue的原型对象上添加一个方法(vm和vc都能用)
        Vue.prototype.hello=()=>{
          console.log('来自Vue原型对象上的Hello');
        }
    }
}