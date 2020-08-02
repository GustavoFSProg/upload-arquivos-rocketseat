import Router from 'express'
import modelImage from './models/modelImage'
import multer from 'multer'
import upload from '../src/config/multer'
import postController from '../src/controllers/postController'

const routes = new Router()

const RoutesList = [
  routes.post(
    '/posts',
    multer(upload).single('file'),
    postController.saveImage
  ),
  routes.delete('/:id', postController.deleteImage),
 // routes.delete('/del', postController.deleteAll),
  routes.get('/', postController.getAll),
]

export default RoutesList
