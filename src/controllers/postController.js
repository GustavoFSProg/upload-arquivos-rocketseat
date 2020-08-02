import modelImage from '../models/modelImage'
import path from 'path'
import fs from 'fs'
import { promisify } from 'util'

async function getAll(req, res) {
  const data = await modelImage.find()
  return res.status(200).send(data)
  console.log('DATA: ', data)
}

async function saveImage(req, res) {
  console.log(req.file)

  const post = await modelImage.create({
    name: req.file.originalname,
    size: req.file.size,
    key: req.file.filename,
    path: req.file.path,
    url: '',
  })
  return res.json(post)
}

// async function deleteAll(req, res) {
//   try {
//     await modelImage.deleteMany()
//     return res.send('deuddd')
//   } catch (error) {
//     return res.send('Fudeu')
//   }
// }

async function deleteImage(req, res) {
  try {
    const imagem = await modelImage.findByIdAndRemove(req.params.id)

    // const caminho = path.resolve(__dirname, '..', '..', 'tmp', 'uploads')

    fs.unlinkSync(imagem.path)

    return res.send({ msg: 'DEU, Deletou!' })
  } catch (error) {
    return res.status(400).send(error, {
      Message: 'Erro ao deletar!',
    })
  }
}

export default { getAll, saveImage, deleteImage }
