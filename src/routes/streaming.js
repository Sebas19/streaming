const {Router, response} =  require('express');
const router = Router();

router.get('/',(req,res)=>{
    res.redirect('index.html');
});

module.exports =  router;