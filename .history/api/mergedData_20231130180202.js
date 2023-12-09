// for merged promises

import { deleteSingleAuthor, getAuthorBooks } from './authorData';
import { deleteBook } from './bookData';

const deleteAuthorBooksRelationshp = (firebaseKey) => new Promise((resolve, reject) => {
  getAuthorBooks(firebaseKey).then((authorBooksArray) => {
    const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export default deleteAuthorBooksRelationshp;
