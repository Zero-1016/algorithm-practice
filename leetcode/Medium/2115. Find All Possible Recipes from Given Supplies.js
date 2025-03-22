/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    const answer = new Set()
    const suppliesSet = new Set([...supplies])
    
    while(true){
        const prevCount = answer.size
        for (let i = 0; i < recipes.length; i++){
            if(answer.has(recipes[i])) continue
            let temp = true
            for (let j = 0; j < ingredients[i].length && temp; j++){
                if(!suppliesSet.has(ingredients[i][j])) {
                    temp = false
                }
            }

            if(temp){
                suppliesSet.add(recipes[i])
                answer.add(recipes[i])
            }
        }
        if(prevCount === answer.size) break
    }

    return [...answer]
};
