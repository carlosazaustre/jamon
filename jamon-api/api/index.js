'use strict'
const express = require('express')
const PostService = require('../services/posts')

const router = express.Router()
const postsService = new PostService()

router.get('/', async (req, res, next) => {
  try {
    const posts = await postsService.getPosts()

    res.status(200).json({
      data: posts,
      message: 'post listed'
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:postId', async (req, res, next) => {
  const { postId } = req.params

  try {
    const post = await postsService.getPost(postId)

    res.status(200).json({
      data: post,
      message: 'post retrieved'
    })
  } catch (error) {
    next(error)
  }
})

module.exports = router
