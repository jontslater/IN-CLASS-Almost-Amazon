import client from '../utils/client';

const endpoint = client.databaseURL;

// FIXME:  GET ALL AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: FILTER FAVORITE AUTHORS
const faveAuthors = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/authors.json?orderBy="favorite"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// FIXME: CREATE AUTHOR
const createAuthor = () => {};

// FIXME: GET SINGLE AUTHOR
const getSingleAuthor = () => {};

// FIXME: DELETE AUTHOR
const deleteSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/books/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// FIXME: UPDATE AUTHOR
const updateAuthor = () => {};

// TODO: GET A SINGLE AUTHOR'S BOOKS
const getAuthorBooks = () => {};

export {
  getAuthors,
  createAuthor,
  getSingleAuthor,
  deleteSingleAuthor,
  updateAuthor,
  getAuthorBooks,
  faveAuthors,
};
