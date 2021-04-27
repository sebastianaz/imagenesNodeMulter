const path = require('path');
const {v4:uuidv4} = require('uuid')
const multer =require('multer');
const express =require('express');
const app = express();

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/img'),
    filename: (req,file,cb)=>{//+fileFilter
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype);
        const extName = fileTypes.test(path.extname(file.originalname))
        if (mimeType && extName){
            return cb(null,uuidv4()+ path.extname(file.originalname));
        }else{
            cb('error de formato')

        }
        
    }
});
const uploadImagenes = multer({
    storage,
   dest:path.join(__dirname,'public/img'),
   limits:{fileSize: 60000}
}).single('imagen')

//setings
app.set('port',3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

//middlewares
app.use(uploadImagenes)

//routes
app.use('/',require('./routes/index'))
//static files
app.use(express.static(path.join(__dirname,'public')))


//listen port
app.listen(app.get('port'),()=>{
    console.log(`listen on port ${app.get('port')}`)
})