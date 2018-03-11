# MyReads

A bookshelf app that allows user to select and categorize books as you have read, are currently reading, or want to read. You can persist your selected book as you interact with the application.
The web project was implemented with ReactJs and React-Route. It uses a public REST interface: [`REST BookAPI`](https://reactnd-books-api.udacity.com) `(use your favorite REST-Client)`

## BookAPI documentation 

The following file [`BooksAPI.js`](https://github.com/linuxbender/react-nd/blob/master/react-fundamentals/myreads/src/BooksApi.js) contains the methods that are required to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(bookId, shelf)`
* bookid: `<String>`
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.

## Prerequisites
* `git: use your favorite client for your system`
* [`Nodejs`](https://nodejs.org/en/)
* [`yarn`](https://yarnpkg.com/lang/en/)
* [`npm`](https://www.npmjs.com/) 

## To Run the App:

* Clone or download the git repo.
* Open a terminal in project directory
* Run `yarn install` or `npm install` (It might take some time to install the required dependencies)
* Once all the dependencies are installed use command `yarn start` or `npm start`  to run the local server.
* App can be accessed at `localhost:3000`

## To Run all tests:
* Run `yarn test` or `npm test`
