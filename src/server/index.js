const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')

const app = express()

app.use(require('cors')())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/element-admin', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true
})

const Article = mongoose.model('Article', new mongoose.Schema({
  title: { type: String },
  body: { type: String}
}))

app.get('/', async (req, res) => {
  res.send('this is server')
})

// 创建文章
app.post('/api/articles', async (req, res) => {
  console.log('req body', req.body)
  const article = await Article.create(req.body)
  res.send(article)
})

// 获取全部文章
app.get('/api/articles', async (req, res) => {
  const articles = await Article.find()
  res.send(articles)
})

// 通过 id 删除文章
app.delete('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.send({
    status: true
  })
})

// 更新文章
app.put('/api/articles/:id', async (req, res) => {
  await Article.findByIdAndUpdate(req.params.id, req.body)

  console.log(req.body)
  res.send({
    status: true
  })
})

// 根据 id 获取文章详情
app.get('/api/articles/:id/detail', async (req, res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
app.listen(8787, () => {
  console.log('server running on: http://127.0.0.1:8787')
})