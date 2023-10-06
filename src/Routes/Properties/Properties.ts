import { Router } from "express";
import { PropertieModule } from "../../App/Properties/PropertieModule";
import multer, { diskStorage } from "multer"


const PropertieRoute = Router();
const controller = PropertieModule.getInstance();

const multerConfig = diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/Photos')
    },
    filename: (req, file, cb) => {
      const [filename, extension] = file.originalname.split(".")
      const formattedFilename = `${filename}-${Date.now()}.${extension}`
      cb(null, formattedFilename)
    },
  })
  const upload = multer({ storage: multerConfig })


PropertieRoute.post("/", upload.array("files", 2), controller.Create.bind(controller));
// PropertieRoute.post("/", upload.array("file"), controller.Create.bind(controller));



export {PropertieRoute }