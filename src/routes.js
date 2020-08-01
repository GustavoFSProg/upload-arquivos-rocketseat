import Router from 'express'
import multer from 'multer'
import upload from '../src/config/multer'

const routes = new Router()

routes.post('/posts', multer(upload).single('file'), (req, res) => {
  console.log(req.file.filename)
  return res.json({ msg: 'hellow' })
})

export default routes
