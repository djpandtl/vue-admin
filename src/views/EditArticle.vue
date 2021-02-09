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
      <el-button type="primary" native-type='submit'>保存</el-button>
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
    created() {
      // MMP 把 params 打成 params 了
      console.log('edit-----------', this.$route.params.id)
      // const _this = this
      this.$http.get(
          `/articles/${this.$route.params.id}/detail`
        ).then(res => {
        this.article = res.data
        
      })
    },
    methods: {
      saveArticle() {
        // 服务器传下来的数据带有 id 等字段，删除它们
        for (let key in this.article) {
          if (key === '_id') {
            delete this.article[key]
          }
        }

        console.log('article', this.article)

        this.$http.put(
          `/articles/${this.$route.params.id}`, this.article
        )
        .then(res => {
          console.log('post---', res.data)

          this.$message({
            message: '文章修改成功！',
            type: 'success'
          });

          this.$router.push('/articles/index')
          // 待处理：跳转路由后 新建文章 处于高亮下，应该取消且...
        }).catch(err => {
          console.log('err', err)
          this.$router.push('/articles/index')
        })
      }
    }
  }
</script>