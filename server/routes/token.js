const express=require('express');
const router=express.Router();

const {CreateToken,stkPush}=require('../controller/createToken')

router.post('/', CreateToken,stkPush)

module.exports=router;