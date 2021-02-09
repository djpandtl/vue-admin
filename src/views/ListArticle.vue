<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="120">
      </el-table-column>
      <el-table-column prop="body" label="内容">
      </el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id, scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    methods: {
      edit(id) {
        console.log('row_id', id)
        // 跳转到文章编辑页
        this.$router.push(`/articles/${id}/edit`)
      },
      remove(id, index) {
        console.log('row_id', id, 'index', index)
        this.$http.delete(`articles/${id}`).then(res => {
          console.log(res.data)
          this.articles.splice(index, 1)
        })
      }
    },
    created() {
      console.log('list router', this.$route)
      this.$http.get('/articles').then(res => {

        // 处理下没有内容的文章
        res.data = res.data.filter(article => {
         return article.title && article.body
        })

        this.articles = res.data
      })
    }
  };
</script>