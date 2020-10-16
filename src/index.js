// console.log('Hello World!');
import { produce } from 'immer';

let book = { title: 'Happy Father' };

function publish(book) {
	return produce(book, draftBook => {
		// mutating code goes here!
		draftBook.isPublished = true;
	});
}

let updatedBook = publish(book);

console.log('book', book);
console.log('updatedBook', updatedBook);
