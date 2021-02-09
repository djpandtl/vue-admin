<template>
  <el-form ref="form" :model="article" 
    label-width="80px" @submit.prevent.native="saveArticle">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type='submit'>立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        article: {}
      }
    },
    methods: {
      saveArticle() {
        console.log(this.article)
        // console.log(this.$http)
        this.$http.post('/articles', this.article).then(res => {
          console.log('post---', res.data)

          this.$message({
            message: '文章创建成功！',
            type: 'success'
          });

          this.$router.push('/articles/index')
          // 待处理：跳转路由后 新建文章 处于高亮下，应该取消且...
        })
      }
    }
  }
</script>