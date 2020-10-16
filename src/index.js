import { produce } from 'immer';

// let book = { title: 'Happy Father' };

// function publish(book) {
// 	return produce(book, draftBook => {
// 		// mutating code goes here!
// 		draftBook.isPublished = true;
// 	});
// }

// let updatedBook = publish(book);

// console.log('book', book);
// console.log('updatedBook', updatedBook);

const recipe = {
	name: 'Spaghetti Bolognese',
	ingredients: ['egg', 'salt'],
};

// add a new ingredient ('cream')
const ingredient1 = 'cream';

function addNewIngredient(recipe, newIngredient) {
	return produce(recipe, draftRecipe => {
		draftRecipe.ingredients = [...draftRecipe.ingredients, newIngredient];
	});
}

let updatedRecipe = addNewIngredient(recipe, ingredient1);
console.log('question 1', updatedRecipe);

// replace 'egg' with 'egg white'
const oldIngredient = 'egg';
const newIngredient = 'egg white';

function replaceIngredient(recipe, oldIngredient, newIngredient) {
	return produce(recipe, draftRecipe => {
		let index = draftRecipe.ingredients.indexOf(oldIngredient);
		draftRecipe.ingredients[index] = newIngredient;
	});
}

updatedRecipe = replaceIngredient(recipe, oldIngredient, newIngredient);
console.log('question 2', updatedRecipe);

// remove an ingredient ('egg')
const selectedIngredient = 'egg';

function removeIngredient(recipe, ingredient) {
	return produce(recipe, draftIngredients => {
		draftIngredients.ingredients = draftIngredients.ingredients.filter(
			i => i !== ingredient
		);
	});
}

updatedRecipe = removeIngredient(recipe, selectedIngredient);
console.log('question 3', updatedRecipe);
