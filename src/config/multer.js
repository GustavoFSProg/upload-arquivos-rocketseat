import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

const upload = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename(req, file, cb) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)
        const filename = `${hash.toString('hex')}-${file.originalname}`
      })
      cb(null, file.originalname)
    },
  }),

  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  filefilter: (res, file, cb) => {
    const AllowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/jpg',
      'image/png',
      'image/gif',
    ]
    if (AllowedMimes.includes(file.mimetypes)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type!'))
    }
  },
}

export default upload
