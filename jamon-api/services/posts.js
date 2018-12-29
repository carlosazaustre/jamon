'use strict'

const DataLib = require('@jamon/data')
const config = require('@jamon/config')

class PostService {
  constructor () {
    this.data = new DataLib(config.posts)
  }

  async getPosts () {
    await this.data.batchRender()
  }

  async getPost (filename) {
    const post = await this.data.render(filename)
    return post
  }
}

async function read () {
  const service = new PostService()
  // const post = await service.getPost('index.md')
  // console.log(post)
  const posts = await service.getPosts()
  console.log(posts)
}

read()
