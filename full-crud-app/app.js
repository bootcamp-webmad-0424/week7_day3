const express = require('express')
const app = express()
const PORT = 5005

// database
require('./db/database-connection')

// middleware
app.use(express.json())

// model
const Book = require('./models/Book.model')
const Author = require('./models/Author.model')




// ------------- BOOK ROUTES -------------

// POST - create new book route
app.post('/api/books', (req, res) => {

    const { title, year, codeISBN, quantity, genre, author } = req.body

    Book
        .create({ title, year, codeISBN, quantity, genre, author })
        .then(newBook => res.sendStatus(201))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})


// GET - all books
app.get('/api/books', (req, res) => {

    Book
        .find()
        .populate('author')                 // nombre de la propiedad a popular
        .then(allBooks => res.json(allBooks))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})


// GET - one book
app.get('/api/books/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findById(book_id)
        .populate('author')                 // nombre de la propiedad a popular
        .then(book => res.json(book))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})


// PUT - edit book
app.put('/api/books/:book_id', (req, res) => {

    const { book_id } = req.params
    const { title, year, codeISBN, quantity, genre, author } = req.body

    Book
        .findByIdAndUpdate(book_id, { title, year, codeISBN, quantity, genre, author })
        .then(updatedBook => res.sendStatus(204))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})


// DELETE - remove book
app.delete('/api/books/:book_id', (req, res) => {

    const { book_id } = req.params

    Book
        .findByIdAndDelete(book_id)
        .then(() => res.sendStatus(204))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})



// ------------- AUTHOR ROUTES -------------

app.post('/api/authors', (req, res) => {

    const { firstName, lastName, bio } = req.body

    Author
        .create({ firstName, lastName, bio })
        .then(newAuthor => res.sendStatus(201))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})

app.get('/api/authors', (req, res) => {

    Author
        .find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.json({ code: 500, errorDetails: err }))
})




// running
app.listen(PORT, () => {
    console.log('Server running on port 5005')
})