import Recipe from '../data/recipes';
import Ingredient from '../data/ingredients';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData

  }

  buildRecipe() {
    this.recipes = this.recipes.map(recipe => {
      recipeData.id, recipeData.image, recipeData.ingredients, recipeData.instructions, recipeData.name, recipeData.tags
    });
  }

  filterByTag(tags) {
    const filteredRecipes = this.recipes.reduce((taggedRecipes, recipe) => {
      tags.forEach(tag => {
        if (recipe.tags.includes(tag) && !taggedRecipes.includes(recipe)) {
          taggedRecipes.push(recipe)
        }
      });
      return taggedRecipes;
    }, [])
    return filteredRecipes;
  }

  filterByName(userInput) {
    const filteredRecipes = this.recipes.reduce((recipeNames, recipe) => {
        if (recipe.name.toLowerCase().includes(userInput.toLowerCase())) {
          recipeNames.push(recipe)
        }
      return recipeNames;
    }, [])
    return filteredRecipes;
  }

  filterByIngredients(userInput) {
    const filteredRecipes = this.recipes.filter(recipe =>
      // recipe.ingredients.some((ingredient) =>
      recipe.ingredients.includes((ingredient) =>
      userInput.includes(this.recipe.ingredients.id)
    ));
    // console.log(ingredient.id);
    console.log(userInput);
    console.log(filteredRecipes);
    return filteredRecipes;
  }
}

export default RecipeRepository;
