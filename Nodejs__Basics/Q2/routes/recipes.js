var recipes = require('../recipes.json');
var router = require('express').Router();

// "/recipies/:id"
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const elapsedTime = req.query.elapsedTime ? parseInt(req.query.elapsedTime) : 0;
    const idRange = recipes.length;
    // 00. validate the reciepe id
    if (!id || id > idRange || isNaN(id)) {
        return res.status(400).send({ message: 'NOT_FOUND' });
    } else {

        //01. search the recipes array for the recipe id 
        //  go to the times array and check everyelement
        //  if the elapsedTime provided as query in the url
        //   is less than the current then the recipe step
        //  is here at this index if not proceed to the next 
        const recipe = recipes[id - 1];
        const recipeTimers = recipe.timers;
        console.log(recipe);
        // console.log(recipeTimers);
        // console.log(`times is :  ${recipe.timers}`)

        for (let i = 0; i < recipeTimers.length; i++) {
            if (recipeTimers[i] >= elapsedTime) {

                return res.status(200).send({ index: i });

            }
        }
        // recipeTimers.every((val, index) => {
        //     if (val === elapsedTime || val > elapsedTime) {
        //     }

        // });



    }


});

module.exports = router;

