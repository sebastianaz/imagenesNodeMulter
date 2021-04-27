const {Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.render('formImg',{
        cabecera: 'Hola mundo!!'
    })
});
router.post('/uploadImg',(req,res)=>{
    //console.log(req.file);
    res.send('recibido');
});


module.exports = router;
