import multer from "multer";
const fileUpload = (filePath)=>{
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, `./public/${filePath}`)
        },
        filename: function (req, file, cb) {
          const filePath = Date.now() + '-' + file.originalname;
          cb(null, filePath)
        }
      })
      
      const upload = multer({ storage: storage });
      return upload;
}

export {fileUpload}