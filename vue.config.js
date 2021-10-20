module.exports = {
    // 这里面的配置要么就写好，要么就别写，写了就会拿去替代默认的。不写就是拿空白的替代默认的，会跑不起来
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },
    lintOnSave:false //关闭语法检查
  }