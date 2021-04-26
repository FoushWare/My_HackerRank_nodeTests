var recipes = require('../recipes.json');
var router = require('express').Router();


router.get('/', (req, res) => {

    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 3;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    //Slice return the array element between the start and end  excluding the end 
    // if default  page = 1  & limit= 3  then startIndex = 0 endIndex= 3
    // Elements extracted will be  0,1,2 🐶
    const result = recipes.slice(startIndex, endIndex);
    console.log(result);
    return res.send(result);



});





module.exports = router;

